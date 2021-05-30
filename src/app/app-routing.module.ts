import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { InventoriesComponent } from './pages/inventories/inventories.component'
import { UtilitiesComponent } from './pages/utilities/utilities.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'แผงควบคุม', breadcrumb: 'แผงควบคุม' },
  },
  {
    path: 'utilities',
    component: UtilitiesComponent,
    data: { title: 'สาธารณูปโภค', breadcrumb: 'สาธารณูปโภค' },
  },
  {
    path: 'foods',
    loadChildren: () => import('./pages/foods/foods.module').then((m) => m.FoodsModule),
    data: { title: 'อาหาร', breadcrumb: 'อาหาร' },
  },
  {
    path: 'inventories',
    loadChildren: () => import('./pages/inventories/inventories.module').then((m) => m.InventoriesModule),
    data: { title: 'ของใช้ในบ้าน', breadcrumb: 'ของใช้ในบ้าน' },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
