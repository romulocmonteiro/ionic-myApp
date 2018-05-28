import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

      let config = configProvider.getConfigData();

      console.log(config);

      if (config.show_slide) {
        configProvider.setConfigData(false);
        console.log(config);
      }

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
