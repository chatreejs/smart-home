import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ElectricityRoutingModule } from './electricity-routing.module'

import { DashboardComponent } from './dashboard/dashboard.component'
import { ElectricityComponent } from './electricity.component'
import { ElectricityDetailComponent } from './electricity-detail/electricity-detail.component'

import { ChartModule } from 'angular2-chartjs'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { IconsProviderModule } from 'src/app/icons-provider.module'

@NgModule({
  declarations: [DashboardComponent, ElectricityComponent, ElectricityDetailComponent],
  imports: [
    CommonModule,
    ElectricityRoutingModule,

    IconsProviderModule,
    ChartModule,

    NzGridModule,
    NzTableModule,
    NzTypographyModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzInputModule,
    NzTagModule,
    NzStatisticModule,
    NzCardModule,
  ],
})
export class ElectricityModule {}
