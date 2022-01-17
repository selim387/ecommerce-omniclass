import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackorderPageRoutingModule } from './trackorder-routing.module';

import { TrackorderPage } from './trackorder.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackorderPageRoutingModule
  ],
  declarations: [TrackorderPage,HeaderComponent,FooterComponent]
})
export class TrackorderPageModule {}
