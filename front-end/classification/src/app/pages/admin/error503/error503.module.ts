import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Error503PageRoutingModule } from './error503-routing.module';

import { Error503Page } from './error503.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Error503PageRoutingModule
  ],
  declarations: [Error503Page]
})
export class Error503PageModule {}
