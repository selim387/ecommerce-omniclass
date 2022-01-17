import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error500Page } from './error500.page';

const routes: Routes = [
  {
    path: '',
    component: Error500Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Error500PageRoutingModule {}
