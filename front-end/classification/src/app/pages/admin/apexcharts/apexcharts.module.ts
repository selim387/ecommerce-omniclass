import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApexchartsPageRoutingModule } from './apexcharts-routing.module';

import { ApexchartsPage } from './apexcharts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApexchartsPageRoutingModule
  ],
  declarations: [ApexchartsPage]
})
export class ApexchartsPageModule {}
