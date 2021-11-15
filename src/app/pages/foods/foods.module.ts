import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FoodsRoutingModule } from './foods-routing.module'
import { IconsProviderModule } from 'src/app/icons-provider.module'

import { FoodsComponent } from './foods.component'
import { TableComponent } from './table/table.component'
import { FoodsDetailComponent } from './foods-detail/foods-detail.component'

import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'

@NgModule({
  declarations: [FoodsComponent, TableComponent, FoodsDetailComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule,

    IconsProviderModule,

    NzGridModule,
    NzTableModule,
    NzTypographyModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzInputModule,
    NzTagModule,
    NzCardModule,
    NzPaginationModule,
  ],
})
export class FoodsModule {}
