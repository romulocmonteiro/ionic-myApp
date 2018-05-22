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
import { MoviePageModule } from '../pages/movie/movie.module';
import { MovieProvider } from '../providers/movie/movie';

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
    MoviePageModule
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
