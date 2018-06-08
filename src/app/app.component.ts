import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';

import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  // Foi incluído o provider ConfigProvider para utilizar a lógica de exibição da IntroPage
  providers: [ ConfigProvider ]
})
export class MonteirosRM {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      let config = JSON.parse(localStorage.getItem("config"));
      console.log('Dados recuperados do localStorage na variável "config"');
      console.log(config);

      if (config == null) {
        this.rootPage = IntroPage
        configProvider.setConfigData(true);
        } else if (!config.slide_dismiss) {
        this.rootPage = IntroPage;
        configProvider.setConfigData(true);
        } else {
        this.rootPage = TabsPage
        }

      if(platform.is('android')) {
        statusBar.styleLightContent();
      } else {
        statusBar.styleDefault();
      }
      splashScreen.hide();
    });

  }
  
}   
