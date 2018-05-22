import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MovieFeedPage } from '../movie-feed/movie-feed';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = MovieFeedPage;
  tab2Root = HomePage;

  constructor(public navCtrl: NavController) {
  }

  goToPage(page_module:string) {
    this.navCtrl.push(page_module);
  }

}
