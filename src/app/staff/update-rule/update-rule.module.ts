import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRulePageRoutingModule } from './update-rule-routing.module';

import { UpdateRulePage } from './update-rule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRulePageRoutingModule
  ],
  declarations: [UpdateRulePage]
})
export class UpdateRulePageModule {}
