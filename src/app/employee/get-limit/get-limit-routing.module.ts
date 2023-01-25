import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetLimitPage } from './get-limit.page';

const routes: Routes = [
  {
    path: '',
    component: GetLimitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetLimitPageRoutingModule {}
