import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

// Aqui foi incluído o MovieProvider
import { MovieProvider } from '../../providers/movie/movie';
import { LoadFailPage } from '../load-fail/load-fail';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()

// Aqui foi incluído o MovieProvider
@Component({
  selector: 'page-movie-feed',
  templateUrl: 'movie-feed.html',
  providers: [
    ConfigProvider,
    MovieProvider
  ]
})
export class MovieFeedPage {

  // Primeiro, foram criadas variáveis para substituir os textos fixos dos cards no feed
  // public user_name:string = "Romulo Monteiro";
  // public update_date:any = "18/12/1981";

  // Depois, foi criado um json mock para popular os dados no lugar das variáveis
  // public json_movie = {
  //   avatar: "",
  //   name: "Romulo Monteiro",
  //   date: "18/12/1981",
  //   desc: "Estou criando meu primeiro app, começando por uma página de feed de filmes.",
  //   qtd_likes: 12,
  //   qtd_comments: 12,
  //   time_comment: "10h ago"
  // }

  //
  public tmdb_image_url:string = "https://image.tmdb.org/t/p/w780";
  public json_list_movies = new Array<any>();
  public json_external_ids = new Array<any>();
  public json_movie_pages = new Array<any>();
  items = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    // aqui foram incluídos manualmente os providers
    private movieProvider: MovieProvider,
    private configProvider: ConfigProvider,
    // aqui foi incluído manualmente o LoadingController para o carregamento da página
    public loadingCtrl: LoadingController) {

    }

  doPageLoad() {

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Prepare sua pipoca!',
      dismissOnPageChange: true
    });
  
    setTimeout(() => {
      console.log('Timeout atingido');
      loading.dismiss();
    }, 1000);

    loading.present();
    console.log('Carregando o feed MovieFeedPage. Aguardando timeout');

    loading.onDidDismiss(() => {
      console.log('Feed MovieFeedPage carregado');
    });
  }
  
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  
  getMovieDetail(movie_id) {
    this.configProvider.setConfigData(true, "day_mode", undefined, movie_id);
    console.log('Movie_id = '+ movie_id);
    this.navCtrl.push("MovieDetailPage");
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  
  public go
  ionViewDidLoad(movie_feed_category:string, page:number) {

    let config = JSON.parse(localStorage.getItem("config"));

    if (movie_feed_category) {
      this.configProvider.setConfigData(true, "day_mode", movie_feed_category, undefined);
      console.log('Feed atual = ' + movie_feed_category)
    } else {
      movie_feed_category = config.movie_feed_category;
    }

    this.doPageLoad();

    // Aqui foi chamada a funçao criada dentro do provider
    this.movieProvider.getMoviesByCategory(movie_feed_category, page).subscribe(
      data_movie  => { 
        // crio um objeto para receber a resposta da chamada http
        // fazendo um cast da estrutura data para any (semelhante a void)
        const response = (data_movie as any);
        // crio um novo objeto contendo apenas o body deste retorno
        // convertendo o seu conteúdo de string para o formato json, por meio de JSON.parse
        this.json_list_movies = JSON.parse(response._body);
        
        // pego o total de paginações necessárias
        // let total_pages = this.json_list_movies.total_pages;

        // retorno para o console a url da conexão http e o objeto retornado
        console.log('URL utilizada para o feed');
        console.log(data_movie.url);
        console.log('Objeto retornado para montagem do feed');
        console.log(this.json_list_movies);
      },
      error_movie => { this.navCtrl.push(LoadFailPage) }
    );

  }

}
