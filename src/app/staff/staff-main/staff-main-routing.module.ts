import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffMainPage } from './staff-main.page';

const routes: Routes = [
  {
    path: '',
    component: StaffMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffMainPageRoutingModule {}
