import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { IconsProviderModule } from './icons-provider.module'

import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'

import { AppComponent } from './app.component'
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { CurrentUserComponent } from './current-user/current-user.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { SiderComponent } from './sider/sider.component'

import { environment } from '../environments/environment'
import { WebServiceUrl } from './core/web-service-token'

/** config angular i18n **/
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
registerLocaleData(en)

/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n'

@NgModule({
  declarations: [AppComponent, DashboardComponent, BreadcrumbComponent, CurrentUserComponent, SiderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,

    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzTypographyModule,
    NzTableModule,
    NzDividerModule,
    NzTagModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzInputModule,
    NzMessageModule,
    NzAvatarModule,
    NzDropDownModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    // Required register, if application use AuthenticationModule.
    { provide: WebServiceUrl, useValue: environment.webServiceUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
