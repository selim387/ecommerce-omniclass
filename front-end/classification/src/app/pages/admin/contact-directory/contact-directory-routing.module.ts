import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDirectoryPage } from './contact-directory.page';

const routes: Routes = [
  {
    path: '',
    component: ContactDirectoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDirectoryPageRoutingModule {}
