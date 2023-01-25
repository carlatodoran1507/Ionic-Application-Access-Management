import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetRangePage } from './get-range.page';

const routes: Routes = [
  {
    path: '',
    component: GetRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetRangePageRoutingModule {}
