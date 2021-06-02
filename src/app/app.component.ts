import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { fromEvent, Observable, Subscription } from 'rxjs'
import { filter, map } from 'rxjs/operators'

import { GeneralEnvironmentConfig } from './core/environment-config'
import { GENERAL_ENVIRONMENT_CONFIG } from './core/provider-name-token'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean
  public innerWidth: number
  public user: any

  private resizeObservable: Observable<Event>
  private resizeSubscription: Subscription

  public constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(GENERAL_ENVIRONMENT_CONFIG) private generalEnvironmentConfig: GeneralEnvironmentConfig
  ) {
    this.isCollapsed = false

    // Subscribe window inner width
    this.innerWidth = window.innerWidth
    this.resizeObservable = fromEvent(window, 'resize')
    this.resizeSubscription = this.resizeObservable.subscribe((e) => {
      this.innerWidth = window.innerWidth
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
  }

  public ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe()
  }
}
