import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAltPage } from './product-alt.page';

const routes: Routes = [
  {
    path: '',
    component: ProductAltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAltPageRoutingModule {}
