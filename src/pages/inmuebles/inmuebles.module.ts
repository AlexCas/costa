import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InmueblesPage } from './inmuebles';

@NgModule({
  declarations: [
    InmueblesPage,
  ],
  imports: [
    IonicPageModule.forChild(InmueblesPage),
  ],
})
export class InmueblesPageModule {}
