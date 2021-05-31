import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { WaterworksDetailComponent } from './waterworks-detail/waterworks-detail.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { breadcrumb: 'ภาพรวมการใช้งาน' },
  },
  {
    path: 'new',
    component: WaterworksDetailComponent,
    data: { breadcrumb: 'เพิ่มรายการใช้น้ำประปา' },
  },
  {
    path: ':waterworksId',
    component: WaterworksDetailComponent,
    data: { breadcrumb: 'แก้ไขรายการใช้น้ำประปา' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterworksRoutingModule {}
