import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffMainPageRoutingModule } from './staff-main-routing.module';

import { StaffMainPage } from './staff-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffMainPageRoutingModule
  ],
  declarations: [StaffMainPage]
})
export class StaffMainPageModule {}
