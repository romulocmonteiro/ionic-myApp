import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  constructor() {
    console.log('ConfigProvider carregado no construtor');
  }

  // Função para recuperar os dados do local storage
  getConfigData() : any {
    return localStorage.getItem(config_key_name)
  }

  // Função para definir os dados do local storage
  setConfigData(
    slide_dismiss?:boolean, 
    css_mode = "day_mode",
    movie_feed_category = "now_playing",
    movie_id = ""
  ) {
    let config = {
      slide_dismiss : false,
      css_mode : "",
      movie_feed_category : "",
      movie_id : ""
    }

    if (slide_dismiss) {
      config.slide_dismiss = slide_dismiss;
    }

    if (config.css_mode != css_mode) {
      config.css_mode = css_mode;
    }

    if (config.movie_feed_category != movie_feed_category) {
      config.movie_feed_category = movie_feed_category;
    }

    if (config.movie_id != movie_id) {
      config.movie_id = movie_id;
    }

    // defino no localStorage o item config_key_name com os dados da estrutura config
    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

}
