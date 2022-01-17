import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighchartPage } from './highchart.page';

const routes: Routes = [
  {
    path: '',
    component: HighchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighchartPageRoutingModule {}
