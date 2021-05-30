import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FoodsRoutingModule } from './foods-routing.module'

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

@NgModule({
  declarations: [FoodsComponent, TableComponent, FoodsDetailComponent],
  imports: [
    CommonModule,

    NzGridModule,
    NzTableModule,
    NzTypographyModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzInputModule,
    NzTagModule,

    FoodsRoutingModule,
  ],
})
export class FoodsModule {}
