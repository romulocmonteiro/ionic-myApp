import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieFeedPage } from './movie-feed';

@NgModule({
  declarations: [
    MovieFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieFeedPage),
  ],
})
export class MovieFeedPageModule {}
