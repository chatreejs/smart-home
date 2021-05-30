import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router'
import { fromEvent, Observable, Subscription } from 'rxjs'
import { filter, map } from 'rxjs/operators'

import { GeneralEnvironmentConfig } from './core/environment-config'
import { GENERAL_ENVIRONMENT_CONFIG } from './core/provider-name-token'

const listOfAvatarColor = [
  '#FFB900',
  '#D83B01',
  '#B50E0E',
  '#E81123',
  '#B4009E',
  '#5C2D91',
  '#0078D7',
  '#00B4FF',
  '#008272',
  '#107C10',
]

interface BreadcrumbConfig {
  path: string[]
  label: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean
  public innerWidth: number
  public user: any
  public avatarName: string
  public avatarColor: string
  public breadcrumbs: BreadcrumbConfig[]

  private resizeObservable: Observable<Event>
  private resizeSubscription: Subscription
  private routerSubscription: Subscription

  public constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(GENERAL_ENVIRONMENT_CONFIG) private generalEnvironmentConfig: GeneralEnvironmentConfig
  ) {
    this.isCollapsed = false
    this.avatarName = ''
    this.avatarColor = ''
    this.breadcrumbs = []

    // Subscribe window inner width
    this.innerWidth = window.innerWidth
    this.resizeObservable = fromEvent(window, 'resize')
    this.resizeSubscription = this.resizeObservable.subscribe((e) => {
      this.innerWidth = window.innerWidth
    })

    // Subscribe router
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadCrumb()
      })
  }

  public ngOnInit(): void {
    const appTitle = this.generalEnvironmentConfig.appName
    // Set dynamic title by page
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild
          while (child?.firstChild) {
            child = child.firstChild
          }
          if (child?.snapshot.data['title']) {
            return `${child.snapshot.data['title']} | ${appTitle}`
          }
          return appTitle
        })
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title)
      })

    // fake
    this.user = {
      firstName: 'Admin',
      lastName: 'A',
    }
    this.avatarName = this.calculateAvatarName(this.user.firstName, this.user.lastName)
    this.avatarColor = this.calculateAvatarColor(this.user.firstName)
  }

  public calculateAvatarName(firstName: string, lastName: string): string {
    const firstLetter = firstName.substr(0, 1)
    const lastLetter = lastName.substr(0, 1)
    return firstLetter + lastLetter
  }

  public calculateAvatarColor(firstName: string): string {
    let sum = 0
    for (let i = 0; i < firstName.length; i++) {
      sum += firstName.charCodeAt(i)
    }
    let colorId = sum % listOfAvatarColor.length
    return listOfAvatarColor[colorId]
  }

  private updateBreadCrumb(): void {
    this.breadcrumbs = this.getBreadCrumb(this.activatedRoute.snapshot)
  }

  private getBreadCrumb(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    config: BreadcrumbConfig[] = [],
    tempPaths: string[] = ['/']
  ): BreadcrumbConfig[] {
    if (activatedRouteSnapshot.children.length > 0) {
      if (activatedRouteSnapshot.firstChild?.data.breadcrumb) {
        tempPaths.push(activatedRouteSnapshot.firstChild.routeConfig?.path || '/')
        const breadcrumbConfig: BreadcrumbConfig = {
          path: [...tempPaths],
          label: activatedRouteSnapshot.firstChild?.data.breadcrumb,
        }
        config.push(breadcrumbConfig)
        return this.getBreadCrumb(activatedRouteSnapshot.firstChild, config, tempPaths)
      }
    }
    return config
  }

  public ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe()
    this.routerSubscription.unsubscribe()
  }
}
