import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetRangePageRoutingModule } from './get-range-routing.module';

import { GetRangePage } from './get-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetRangePageRoutingModule
  ],
  declarations: [GetRangePage]
})
export class GetRangePageModule {}
