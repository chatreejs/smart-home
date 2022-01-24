import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FoodsComponent } from './foods.component'
import { TableComponent } from './table/table.component'
import { FoodsDetailComponent } from './foods-detail/foods-detail.component'

const routes: Routes = [
  {
    path: '',
    component: FoodsComponent,
    children: [
      {
        path: '',
        component: TableComponent,
        data: { breadcrumb: 'รายการอาหาร' },
      },
      {
        path: 'new',
        component: FoodsDetailComponent,
        data: { breadcrumb: 'เพิ่มรายการอาหาร' },
      },
      {
        path: ':foodId',
        component: FoodsDetailComponent,
        data: { breadcrumb: 'แก้ไขรายการอาหาร' },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsRoutingModule {}
