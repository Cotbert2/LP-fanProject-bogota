import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullColorPagePageRoutingModule } from './full-color-page-routing.module';

import { FullColorPagePage } from './full-color-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullColorPagePageRoutingModule
  ],
  declarations: [FullColorPagePage]
})
export class FullColorPagePageModule {}
