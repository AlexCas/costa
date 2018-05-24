import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InmueblePage } from './inmueble';

@NgModule({
  declarations: [
    InmueblePage,
  ],
  imports: [
    IonicPageModule.forChild(InmueblePage),
  ],
})
export class InmueblePageModule {}
