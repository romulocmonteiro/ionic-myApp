import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-instagram-feed',
  templateUrl: 'instagram-feed.html',
})
export class InstagramFeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Feed InstagramFeedPage carregado');
  }

}
