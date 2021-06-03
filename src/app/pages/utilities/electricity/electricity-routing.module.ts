import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { ElectricityDetailComponent } from './electricity-detail/electricity-detail.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { breadcrumb: 'ภาพรวมการใช้งาน' },
  },
  {
    path: 'new',
    component: ElectricityDetailComponent,
    data: { breadcrumb: 'เพิ่มรายการใช้ไฟฟ้า' },
  },
  {
    path: ':electricityId',
    component: ElectricityDetailComponent,
    data: { breadcrumb: 'แก้ไขรายการใช้ไฟฟ้า' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricityRoutingModule {}
