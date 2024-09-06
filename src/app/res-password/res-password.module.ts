import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResPasswordPageRoutingModule } from './res-password-routing.module';

import { ResPasswordPage } from './res-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResPasswordPageRoutingModule
  ],
  declarations: [ResPasswordPage]
})
export class ResPasswordPageModule {}
