import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Error400PageRoutingModule } from './error400-routing.module';

import { Error400Page } from './error400.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Error400PageRoutingModule
  ],
  declarations: [Error400Page]
})
export class Error400PageModule {}
