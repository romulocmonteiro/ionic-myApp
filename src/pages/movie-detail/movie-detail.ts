import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  public tmdb_image_url:string = "https://image.tmdb.org/t/p/w500";
  public json_movie = { };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');

    // Aqui foi chamada a funçao criada dentro do provider
    this.movieProvider.getMovieById("299536").subscribe(
      data  => { 
        const response = (data as any);
        this.json_movie = JSON.parse(response._body);
        console.log(data);
      },
      error => { console.log(error); }
    )
  }

}
