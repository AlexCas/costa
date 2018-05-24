import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InmueblePage } from '../inmueble/inmueble';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  ver(){
    this.navCtrl.setRoot(InmueblePage);
  }
}
