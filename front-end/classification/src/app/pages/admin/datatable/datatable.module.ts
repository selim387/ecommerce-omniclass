import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatatablePageRoutingModule } from './datatable-routing.module';

import { DatatablePage } from './datatable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatatablePageRoutingModule
  ],
  declarations: [DatatablePage]
})
export class DatatablePageModule {}
