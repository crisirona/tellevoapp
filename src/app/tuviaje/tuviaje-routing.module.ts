import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuviajePage } from './tuviaje.page';

const routes: Routes = [
  {
    path: '',
    component: TuviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuviajePageRoutingModule {}
