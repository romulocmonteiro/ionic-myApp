import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MovieFeedPage } from '../movie-feed/movie-feed';
import { NavController } from 'ionic-angular';
import { InstagramFeedPage } from '../instagram-feed/instagram-feed';
import { TwitterFeedPage } from '../twitter-feed/twitter-feed';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = MovieFeedPage;
  tab2Root = InstagramFeedPage;
  tab3Root = TwitterFeedPage;
  tab4Root = AboutPage;

  constructor(public navCtrl: NavController) {
  }

  goToPage(page_module:string) {
    this.navCtrl.push(page_module);
  }

}
