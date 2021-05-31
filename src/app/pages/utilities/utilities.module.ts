import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UtilitiesRoutingModule } from './utilities-routing.module'

import { UtilitiesComponent } from './utilities.component'
import { ElectricityComponent } from './electricity/electricity.component'
import { WaterworksComponent } from './waterworks/waterworks.component'

@NgModule({
  declarations: [UtilitiesComponent, ElectricityComponent],
  imports: [CommonModule, UtilitiesRoutingModule],
})
export class UtilitiesModule {}
