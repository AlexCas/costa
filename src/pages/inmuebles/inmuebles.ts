import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InmuebleszonePage } from '../inmuebleszone/inmuebleszone';

/**
 * Generated class for the InmueblesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inmuebles',
  templateUrl: 'inmuebles.html',
})
export class InmueblesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InmueblesPage');
  }

  zone(){
    this.navCtrl.setRoot(InmuebleszonePage);
  }
}
