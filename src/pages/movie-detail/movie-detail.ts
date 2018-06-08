import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  public tmdb_image_url:string  = "https://image.tmdb.org/t/p/w500";
  public json_movie_detail      = new Array<any>();
  public json_similar_movies    = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    private configProvider: ConfigProvider) {
  }

  getMovieDetail(movie_id) {
    this.configProvider.setConfigData(true, undefined, movie_id);
    console.log('Movie_id = '+ movie_id);
    this.navCtrl.push("MovieDetailPage");
  }
  
  ionViewDidLoad() {

    let config = JSON.parse(localStorage.getItem("config"));  

    // Aqui foi chamada a funçao criada dentro do provider
    this.movieProvider.getMovieById(config.movie_id).subscribe(
      data_movie_detail  => { 
        const response = (data_movie_detail as any);
        this.json_movie_detail = JSON.parse(response._body);
        console.log('MovieDetailPage - Detalhes do filme carregados');
        console.log(data_movie_detail);
      },
      error_detail => { console.log(error_detail); }
    )

    this.movieProvider.getSimilarMoviesById(config.movie_id).subscribe(
      data_similar_movies  => { 
        const response = (data_similar_movies as any);
        const obj_return = JSON.parse(response._body);
        this.json_similar_movies = obj_return.results;
        console.log('MovieDetailPage - Filmes similares carregados');
        console.log(data_similar_movies);
      },
      error_similar => { console.log(error_similar); }
    )
  }

}
