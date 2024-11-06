import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullColorPagePage } from './full-color-page.page';

const routes: Routes = [
  {
    path: '',
    component: FullColorPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullColorPagePageRoutingModule {}
