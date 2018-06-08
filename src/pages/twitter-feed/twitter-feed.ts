import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-twitter-feed',
  templateUrl: 'twitter-feed.html',
})
export class TwitterFeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Feed TwitterFeedPage carregado');
  }

}
