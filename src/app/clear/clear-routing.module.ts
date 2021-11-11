import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClearPage } from './clear.page';

const routes: Routes = [
  {
    path: '',
    component: ClearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClearPageRoutingModule {}
