import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  tmdb_url:string = "https://api.themoviedb.org/3";
  api_key:string = "abdd9036a45a14770b9c65bf2baf157e";
  //api_key_token:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRkOTAzNmE0NWExNDc3MGI5YzY1YmYyYmFmMTU3ZSIsInN1YiI6IjViMDIyNDk0YzNhMzY4NmM4ZjAwZGRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5axBScySbmKlHSs920t8IDuOVuqPDGqjl8yH-7UWF0";
  
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getMovies(type:string) {
    return this.http.get(this.tmdb_url + "/movie/" + type + "?api_key=" + this.api_key + "&language=pt-BR&region=BR");
  }

}
