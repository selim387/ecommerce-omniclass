import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighchartPageRoutingModule } from './highchart-routing.module';

import { HighchartPage } from './highchart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighchartPageRoutingModule
  ],
  declarations: [HighchartPage]
})
export class HighchartPageModule {}
