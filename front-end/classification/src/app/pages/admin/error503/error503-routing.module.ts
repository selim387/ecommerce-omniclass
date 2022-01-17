import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error503Page } from './error503.page';

const routes: Routes = [
  {
    path: '',
    component: Error503Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Error503PageRoutingModule {}
