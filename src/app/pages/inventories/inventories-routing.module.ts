import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TableComponent } from './table/table.component'
import { InventoriesDetailComponent } from './inventories-detail/inventories-detail.component'

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    data: { breadcrumb: 'รายการของใช้ในบ้าน' },
  },
  {
    path: 'new',
    component: InventoriesDetailComponent,
    data: { breadcrumb: 'เพิ่มรายการของใช้ในบ้าน' },
  },
  {
    path: ':inventoryId',
    component: InventoriesDetailComponent,
    data: { breadcrumb: 'แก้ไขรายการของใช้ในบ้าน' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoriesRoutingModule {}
