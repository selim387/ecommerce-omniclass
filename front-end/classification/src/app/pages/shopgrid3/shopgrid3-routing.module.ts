import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shopgrid3Page } from './shopgrid3.page';

const routes: Routes = [
  {
    path: '',
    component: Shopgrid3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shopgrid3PageRoutingModule {}
