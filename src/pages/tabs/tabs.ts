import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MovieFeedPage } from '../movie-feed/movie-feed';
import { InstagramFeedPage } from '../instagram-feed/instagram-feed';
import { TwitterFeedPage } from '../twitter-feed/twitter-feed';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = MovieFeedPage;
  tab2Root = InstagramFeedPage;
  tab3Root = TwitterFeedPage;
  tab4Root = SettingsPage;

  constructor(public navCtrl: NavController) {
  }

  goToPage(page_module:string) {
    this.navCtrl.push(page_module);
  }

}
