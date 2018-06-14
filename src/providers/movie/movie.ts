import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {

  public tmdb_url:string = "https://api.themoviedb.org/3";
  public api_key:string = "abdd9036a45a14770b9c65bf2baf157e";

  constructor(
    public http: Http) {
    console.log('MovieProvider carregado no construtor');
  }

  getMoviesByCategory(type:string) {
    return this.http.get(this.tmdb_url + "/movie/" + type + "?api_key=" + this.api_key + "&language=pt-BR&region=BR");
  }

  getMovieById(id:string) {
    return this.http.get(this.tmdb_url + "/movie/" + id + "?api_key=" + this.api_key + "&language=pt-BR&region=BR");
  }

  getSimilarMoviesById(id:string) {
    return this.http.get(this.tmdb_url + "/movie/" + id + "/similar?api_key=" + this.api_key + "&language=pt-BR&region=BR");
  }

  getExternalIdsById(id:string) {
    return this.http.get(this.tmdb_url + "/movie/" + id + "/external_ids?api_key=" + this.api_key);
  }

  getMovieCreditsById(id:string) {
    return this.http.get(this.tmdb_url + "/movie/" + id + "/credits?api_key=" + this.api_key);
  }
}
