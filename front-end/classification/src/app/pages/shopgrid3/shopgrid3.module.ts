import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { IonicModule } from '@ionic/angular';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Shopgrid3PageRoutingModule } from './shopgrid3-routing.module';
import {TreeViewComponent} from '../../tree-view/tree-view.component';
import { Shopgrid3Page } from './shopgrid3.page';
import { ComponentsModule } from '../../components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shopgrid3PageRoutingModule,
    ComponentsModule,
    FormsModule,
      HttpClientModule,
      

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [Shopgrid3Page]
})
export class Shopgrid3PageModule {}
