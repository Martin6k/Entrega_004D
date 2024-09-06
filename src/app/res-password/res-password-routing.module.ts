import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResPasswordPage } from './res-password.page';

const routes: Routes = [
  {
    path: '',
    component: ResPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResPasswordPageRoutingModule {}
