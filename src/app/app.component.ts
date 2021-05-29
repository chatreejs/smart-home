import { Component, Inject, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, map } from 'rxjs/operators'

import { GeneralEnvironmentConfig } from './core/environment-config'
import { GENERAL_ENVIRONMENT_CONFIG } from './core/provider-name-token'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(GENERAL_ENVIRONMENT_CONFIG) private generalEnvironmentConfig: GeneralEnvironmentConfig) {
  }

  public ngOnInit(): void {
    const appTitle = this.generalEnvironmentConfig.appName
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child?.firstChild) {
            child = child.firstChild
          }
          if (child?.snapshot.data['title']) {
            return `${child.snapshot.data['title']} | ${appTitle}`
          }
          return appTitle
        })
      ).subscribe((title: string) => {
        this.titleService.setTitle(title)
      })
  }
}
