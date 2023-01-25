import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'employee-main',
    loadChildren: () => import('./employee/employee-main/employee-main.module').then(m => m.EmployeeMainPageModule)
  },
  {
    path: 'staff-main',
    loadChildren: () => import('./staff/staff-main/staff-main.module').then(m => m.StaffMainPageModule)
  },
  {
    path: 'get-range',
    loadChildren: () => import('./employee/get-range/get-range.module').then(m => m.GetRangePageModule)
  },
  {
    path: 'get-limit',
    loadChildren: () => import('./employee/get-limit/get-limit.module').then(m => m.GetLimitPageModule)
  },
  {
    path: 'update-rule',
    loadChildren: () => import('./staff/update-rule/update-rule.module').then(m => m.UpdateRulePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
