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
  public json_external_ids      = new Array<any>();
  public json_movie_credits     = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    private configProvider: ConfigProvider) {
  }

  getMovieDetail(movie_id) {
    this.configProvider.setConfigData(true, "day_mode", undefined, movie_id);
    console.log('Movie_id = '+ movie_id);
    this.navCtrl.push("MovieDetailPage");
  }
  
  ionViewDidLoad() {

    let config = JSON.parse(localStorage.getItem("config"));  

    // Aqui foi chamada a funçao criada dentro do provider
    this.movieProvider.getMovieById(config.movie_id).subscribe(
      data_movie_detail  => { 
        const response_movie_detail = (data_movie_detail as any);
        this.json_movie_detail = JSON.parse(response_movie_detail._body);
        console.log('MovieDetailPage - Detalhes do filme carregados');
        console.log(data_movie_detail);

        this.movieProvider.getExternalIdsById(config.movie_id).subscribe(
          data_external_ids  => { 
            const response_external_ids = (data_external_ids as any);
            this.json_external_ids = JSON.parse(response_external_ids._body);
            console.log('MovieDetailPage - IDs externos carregados');
            console.log(data_external_ids);
            console.log(this.json_external_ids);
          },
          error_external_ids => { console.log(error_external_ids); }
        )

        this.movieProvider.getMovieCreditsById(config.movie_id).subscribe(
          data_movie_credits  => { 
            const response_movie_credits = (data_movie_credits as any);
            const obj_return = JSON.parse(response_movie_credits._body);
            this.json_movie_credits = obj_return.cast;
                console.log('MovieDetailPage - Créditos carregados');
            console.log(data_movie_credits);
            console.log(this.json_movie_credits[0].character);
          },
          error_external_ids => { console.log(error_external_ids); }
        )

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
