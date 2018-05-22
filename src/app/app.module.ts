import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MonteirosRM } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { MovieFeedPageModule } from '../pages/movie-feed/movie-feed.module';
import { MovieProvider } from '../providers/movie/movie';
import { LoadFailPageModule } from '../pages/load-fail/load-fail.module';

@NgModule({
  declarations: [
    MonteirosRM, 
    HomePage, 
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule, 
    IonicModule.forRoot(MonteirosRM), 
    IntroPageModule, 
    MenuPageModule, 
    MovieFeedPageModule,
    LoadFailPageModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MonteirosRM, 
    HomePage, 
    TabsPage],
  providers: [
    StatusBar, 
    SplashScreen, { 
      provide: ErrorHandler, 
      useClass: IonicErrorHandler 
    },
    MovieProvider
  ]
})
export class AppModule { }
