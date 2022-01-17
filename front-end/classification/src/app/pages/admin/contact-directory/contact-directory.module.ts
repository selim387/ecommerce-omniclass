import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactDirectoryPageRoutingModule } from './contact-directory-routing.module';

import { ContactDirectoryPage } from './contact-directory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactDirectoryPageRoutingModule
  ],
  declarations: [ContactDirectoryPage]
})
export class ContactDirectoryPageModule {}
