import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAltPageRoutingModule } from './product-alt-routing.module';

import { ProductAltPage } from './product-alt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductAltPageRoutingModule
  ],
  declarations: [ProductAltPage]
})
export class ProductAltPageModule {}
