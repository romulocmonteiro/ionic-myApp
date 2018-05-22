import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MonteirosRM } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { IntroPageModule } from '../pages/intro/intro.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { MovieFeedPageModule } from '../pages/movie-feed/movie-feed.module';
import { MovieProvider } from '../providers/movie/movie';
import { LoadFailPageModule } from '../pages/load-fail/load-fail.module';
import { InstagramFeedPageModule } from '../pages/instagram-feed/instagram-feed.module';
import { TwitterFeedPageModule } from '../pages/twitter-feed/twitter-feed.module';

@NgModule({
  declarations: [
    MonteirosRM, 
    AboutPage, 
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule, 
    IonicModule.forRoot(MonteirosRM), 
    IntroPageModule, 
    MenuPageModule, 
    MovieFeedPageModule,
    LoadFailPageModule,
    InstagramFeedPageModule,
    TwitterFeedPageModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MonteirosRM, 
    AboutPage, 
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
