import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ChatPage } from '../chat/chat';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MapPage;
  tab2Root: any = ChatPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
