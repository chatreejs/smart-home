import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'

interface BreadcrumbConfig {
  path: string[]
  label: string
}

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item *ngFor="let breadcrumb of breadcrumbs; let i = index">
        <ng-container *ngIf="i === breadcrumbs.length - 1; else linkBreadcrumb">{{ breadcrumb.label }}</ng-container>
        <ng-template #linkBreadcrumb>
          <a [routerLink]="breadcrumb.path">{{ breadcrumb.label }}</a>
        </ng-template>
      </nz-breadcrumb-item>
    </nz-breadcrumb>
  `,
  styles: [
    `
      nz-breadcrumb {
        margin: 16px 0;
      }
    `,
  ],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: BreadcrumbConfig[]

  private routerSubscription: Subscription

  public constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = []

    // Subscribe router
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadCrumb()
      })
  }

  public ngOnInit(): void {}

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
    this.routerSubscription.unsubscribe()
  }
}
