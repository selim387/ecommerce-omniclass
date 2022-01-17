import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostWithoutSidebarPageRoutingModule } from './post-without-sidebar-routing.module';

import { PostWithoutSidebarPage } from './post-without-sidebar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostWithoutSidebarPageRoutingModule
  ],
  declarations: [PostWithoutSidebarPage]
})
export class PostWithoutSidebarPageModule {}
