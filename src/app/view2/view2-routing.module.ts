import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View2Page } from './view2.page';

const routes: Routes = [
  {
    path: '',
    component: View2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class View2PageRoutingModule {}
