import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ElectricityComponent } from './electricity/electricity.component'

const routes: Routes = [
  {
    path: 'electricity',
    component: ElectricityComponent,
    data: { breadcrumb: 'ไฟฟ้า' },
  },
  {
    path: 'waterworks',
    loadChildren: () => import('./waterworks/waterworks.module').then((m) => m.WaterworksModule),
    data: { breadcrumb: 'ประปา' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesRoutingModule {}
