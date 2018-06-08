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

      let config = JSON.parse(localStorage.getItem("config"));

      if (config.slide_dismiss) {
        configProvider.setConfigData(true,"","teste");
      }

    }

  ionViewDidLoad() {
    console.log('Página AboutPage carregada');
  }

}
