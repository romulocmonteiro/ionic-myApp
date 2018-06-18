import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MovieFeedPage } from '../movie-feed/movie-feed';
import { NewsFeedPage } from '../news-feed/news-feed';
import { InstagramFeedPage } from '../instagram-feed/instagram-feed';
import { TwitterFeedPage } from '../twitter-feed/twitter-feed';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = MovieFeedPage;
  tab2Root = NewsFeedPage;
  tab3Root = InstagramFeedPage;
  tab4Root = TwitterFeedPage;
  tab5Root = SettingsPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Página TabsPage carregada');
  }

  goToPage(page_module:string) {
    this.navCtrl.push(page_module);
  }

}
