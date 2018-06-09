import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostRoutingModule } from './lost-routing.module';
import { LostComponent } from '../../pages/lost/lost.component';

@NgModule({
  imports: [
    CommonModule,
    LostRoutingModule
  ],
  declarations: [LostComponent]
})
export class LostModule { }
