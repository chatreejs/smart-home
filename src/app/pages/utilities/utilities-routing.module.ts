import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'electricity',
    loadChildren: () => import('./electricity/electricity.module').then((m) => m.ElectricityModule),
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
