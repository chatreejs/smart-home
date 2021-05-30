import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InventoriesRoutingModule } from './inventories-routing.module'

import { InventoriesComponent } from './inventories.component'
import { TableComponent } from './table/table.component'
import { InventoriesDetailComponent } from './inventories-detail/inventories-detail.component'

import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@NgModule({
  declarations: [InventoriesComponent, TableComponent, InventoriesDetailComponent],
  imports: [
    CommonModule,

    NzGridModule,
    NzTableModule,
    NzTypographyModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzInputModule,
    NzTagModule,

    InventoriesRoutingModule,
  ],
})
export class InventoriesModule {}
