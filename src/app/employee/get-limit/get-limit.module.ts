import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetLimitPageRoutingModule } from './get-limit-routing.module';

import { GetLimitPage } from './get-limit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetLimitPageRoutingModule
  ],
  declarations: [GetLimitPage]
})
export class GetLimitPageModule {}
