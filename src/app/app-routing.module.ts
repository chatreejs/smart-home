import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { FoodsComponent } from './pages/foods/foods.component'
import { InventoriesComponent } from './pages/inventories/inventories.component'
import { UtilitiesComponent } from './pages/utilities/utilities.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'แผงควบคุม' } },
  { path: 'utilities', component: UtilitiesComponent, data: { title: 'สาธารณูปโภค' } },
  { path: 'foods', component: FoodsComponent, data: { title: 'อาหาร' } },
  { path: 'inventories', component: InventoriesComponent, data: { title: 'ของใช้ในบ้าน' } },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
