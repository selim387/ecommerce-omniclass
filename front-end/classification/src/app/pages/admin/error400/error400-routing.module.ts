import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error400Page } from './error400.page';

const routes: Routes = [
  {
    path: '',
    component: Error400Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Error400PageRoutingModule {}
