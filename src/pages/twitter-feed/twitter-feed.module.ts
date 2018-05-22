import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterFeedPage } from './twitter-feed';

@NgModule({
  declarations: [
    TwitterFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(TwitterFeedPage),
  ],
})
export class TwitterFeedPageModule {}
