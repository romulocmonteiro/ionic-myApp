import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MonteirosRM } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { IntroPageModule } from '../pages/intro/intro.module';
import { MovieFeedPageModule } from '../pages/movie-feed/movie-feed.module';
import { NewsFeedPageModule } from '../pages/news-feed/news-feed.module';
import { LoadFailPageModule } from '../pages/load-fail/load-fail.module';
import { InstagramFeedPageModule } from '../pages/instagram-feed/instagram-feed.module';
import { TwitterFeedPageModule } from '../pages/twitter-feed/twitter-feed.module';

import { MovieProvider } from '../providers/movie/movie';
import { ConfigProvider } from '../providers/config/config';

import { SettingsPageModule } from '../pages/settings/settings.module';
import { AboutPageModule } from '../pages/about/about.module';

@NgModule({
  declarations: [
    MonteirosRM, 
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule, 
    IonicModule.forRoot(MonteirosRM), 
    IntroPageModule, 
    MovieFeedPageModule,
    NewsFeedPageModule,
    LoadFailPageModule,
    InstagramFeedPageModule,
    TwitterFeedPageModule,
    SettingsPageModule,
    AboutPageModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MonteirosRM, 
    TabsPage],
  providers: [
    StatusBar, 
    SplashScreen, { 
      provide: ErrorHandler, 
      useClass: IonicErrorHandler 
    },
    MovieProvider,
    ConfigProvider
  ]
})
export class AppModule { }
