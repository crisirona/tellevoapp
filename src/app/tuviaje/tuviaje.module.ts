import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuviajePageRoutingModule } from './tuviaje-routing.module';

import { TuviajePage } from './tuviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuviajePageRoutingModule
  ],
  declarations: [TuviajePage]
})
export class TuviajePageModule {}
