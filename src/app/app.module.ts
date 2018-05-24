import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AnunciosPage } from '../pages/anuncios/anuncios';
import { BonusesPage } from '../pages/bonuses/bonuses';
import { ClientePage } from '../pages/cliente/cliente';
import { ClientesPage } from '../pages/clientes/clientes';
import { ExtrasPage } from '../pages/extras/extras';
import { InmueblePage } from '../pages/inmueble/inmueble';
import { InmueblesPage } from '../pages/inmuebles/inmuebles';
import { InmuebleszonePage } from '../pages/inmuebleszone/inmuebleszone';
import { LoginPage } from '../pages/login/login';
import { PromocionesPage } from '../pages/promociones/promociones';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnunciosPage,
    BonusesPage,
    ClientePage,
    ClientesPage,
    ExtrasPage,
    InmueblePage,
    InmueblesPage,
    LoginPage,
    PromocionesPage,
    InmuebleszonePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnunciosPage,
    BonusesPage,
    ClientePage,
    ClientesPage,
    ExtrasPage,
    InmueblePage,
    InmueblesPage,
    LoginPage,
    PromocionesPage,
    InmuebleszonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
