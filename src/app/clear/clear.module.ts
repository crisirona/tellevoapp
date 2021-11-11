import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClearPageRoutingModule } from './clear-routing.module';

import { ClearPage } from './clear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClearPageRoutingModule
  ],
  declarations: [ClearPage]
})
export class ClearPageModule {}
