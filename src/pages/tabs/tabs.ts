import { Component } from '@angular/core';

import { InmueblesPage } from '../inmuebles/inmuebles';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ClientesPage } from '../clientes/clientes';
import { BonusesPage } from '../bonuses/bonuses';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InmueblesPage;
  tab3Root = ClientesPage;
  tab4Root = BonusesPage;

  constructor() {

  }
}
