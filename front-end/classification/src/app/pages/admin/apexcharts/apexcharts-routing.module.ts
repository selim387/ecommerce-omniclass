import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApexchartsPage } from './apexcharts.page';

const routes: Routes = [
  {
    path: '',
    component: ApexchartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApexchartsPageRoutingModule {}
