import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicTablePageRoutingModule } from './basic-table-routing.module';

import { BasicTablePage } from './basic-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicTablePageRoutingModule
  ],
  declarations: [BasicTablePage]
})
export class BasicTablePageModule {}
