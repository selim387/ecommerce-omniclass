import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import { ComponentsModule } from '../../components.module'

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule
  ],
  declarations: [TestPage]
})
export class TestPageModule {}
