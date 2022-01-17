import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostWithoutSidebarPage } from './post-without-sidebar.page';

const routes: Routes = [
  {
    path: '',
    component: PostWithoutSidebarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostWithoutSidebarPageRoutingModule {}
