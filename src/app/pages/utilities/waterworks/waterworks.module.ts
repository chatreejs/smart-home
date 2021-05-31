import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { WaterworksRoutingModule } from './waterworks-routing.module'
import { IconsProviderModule } from 'src/app/icons-provider.module'

import { WaterworksComponent } from './waterworks.component'
import { DashboardComponent } from './dashboard/dashboard.component'

import { ChartModule } from 'angular2-chartjs'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzCardModule } from 'ng-zorro-antd/card'
import { WaterworksDetailComponent } from './waterworks-detail/waterworks-detail.component'

@NgModule({
  declarations: [DashboardComponent, WaterworksComponent, WaterworksDetailComponent],
  imports: [
    CommonModule,
    WaterworksRoutingModule,

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
export class WaterworksModule {}
