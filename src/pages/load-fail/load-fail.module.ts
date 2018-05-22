import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadFailPage } from './load-fail';

@NgModule({
  declarations: [
    LoadFailPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadFailPage),
  ],
})
export class LoadFailPageModule {}
