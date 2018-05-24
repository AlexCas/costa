import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonusesPage } from './bonuses';

@NgModule({
  declarations: [
    BonusesPage,
  ],
  imports: [
    IonicPageModule.forChild(BonusesPage),
  ],
})
export class BonusesPageModule {}
