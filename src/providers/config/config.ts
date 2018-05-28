//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    show_slide : true,
    name : "",
    username : ""
  }

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  // Função para recuperar os dados do local storage
  getConfigData() : any {
    return localStorage.getItem(config_key_name)
  }

  // Função para definir os dados do local storage
  setConfigData(show_slide? : boolean, name? : string, username? : string) {

    let config = {
      show_slide : true,
      name : "",
      username : ""
    }

    if (show_slide) {
      config.show_slide = show_slide;
    }

    if (name) {
      config.name = name;
    }

    if (show_slide) {
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

}
