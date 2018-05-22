import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  public tmdb_url:string = "https://api.themoviedb.org/3";
  public api_key:string = "abdd9036a45a14770b9c65bf2baf157e";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getMovies(type:string) {
    return this.http.get(this.tmdb_url + "/movie/" + type + "?api_key=" + this.api_key + "&language=pt-BR&region=BR");
  }

  getMovieById(id:String) {
    return this.http.get(this.tmdb_url + "/movie/" + id + "?api_key=" + this.api_key + "&language=pt-BR&region=BR");
  }

}
