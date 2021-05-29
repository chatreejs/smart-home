import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import th from '@angular/common/locales/th'
import { registerLocaleData } from '@angular/common'
import { NZ_I18N, th_TH, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n'

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
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { UtilitiesComponent } from './pages/utilities/utilities.component'
import { FoodsComponent } from './pages/foods/foods.component'
import { InventoriesComponent } from './pages/inventories/inventories.component'

import { AUTHENTICATION_CONFIG, GENERAL_ENVIRONMENT_CONFIG, WEB_SERVICE_CONFIG } from './core/provider-name-token'
import { environment } from '../environments/environment'

registerLocaleData(th)

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UtilitiesComponent,
    FoodsComponent,
    InventoriesComponent
  ],
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
    { provide: GENERAL_ENVIRONMENT_CONFIG, useValue: environment },
    { provide: WEB_SERVICE_CONFIG, useValue: environment },
    { provide: AUTHENTICATION_CONFIG, useValue: environment },
    { provide: NZ_I18N, useValue: th_TH },
    { provide: NZ_DATE_LOCALE, useValue: th }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
