import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InmueblePage } from '../inmueble/inmueble';
/**
 * Generated class for the InmuebleszonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inmuebleszone',
  templateUrl: 'inmuebleszone.html',
})
export class InmuebleszonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InmuebleszonePage');
  }

  ver(){
    this.navCtrl.setRoot(InmueblePage);
  }
}
