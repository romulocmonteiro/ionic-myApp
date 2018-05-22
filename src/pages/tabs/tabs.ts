import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MoviePage } from '../movie/movie';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = MoviePage;
  tab2Root = HomePage;

  constructor() {

  }
}
