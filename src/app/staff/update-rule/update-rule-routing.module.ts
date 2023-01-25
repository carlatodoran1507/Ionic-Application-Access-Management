import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRulePage } from './update-rule.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRulePageRoutingModule {}
