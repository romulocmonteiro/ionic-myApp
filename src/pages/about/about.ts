import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [ ConfigProvider ]
})
export class AboutPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    configProvider: ConfigProvider
  ) {

    }

  ionViewDidLoad() {
    console.log('Página AboutPage carregada');
  }

}
