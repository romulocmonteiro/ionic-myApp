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
  public list_movies = new Array<any>();
  
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
      content: 'Pegue sua pipoca...',
      dismissOnPageChange: true
    });
  
    setTimeout(() => {
      console.log('Timeout atingido');
      loading.dismiss();
    }, 2000);

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
    this.configProvider.setConfigData(true, undefined, movie_id);
    console.log('Movie_id = '+ movie_id);
    this.navCtrl.push("MovieDetailPage");
  }

  public go
  ionViewDidLoad(movie_feed_category:string) {

    if (movie_feed_category) {
      this.configProvider.setConfigData(true, movie_feed_category);
      console.log('Feed atual = ' + movie_feed_category)
    } else {
      let config = JSON.parse(localStorage.getItem("config"));
      movie_feed_category = config.movie_feed_category;
    }

    this.doPageLoad();

    // Aqui foi chamada a funçao criada dentro do provider
    this.movieProvider.getMoviesByCategory(movie_feed_category).subscribe(
      data  => { 
        // crio um objeto para receber a resposta da chamada http
        // fazendo um cast da estrutura data para any (semelhante a void)
        const response = (data as any);
        // crio um novo objeto contendo apenas o body deste retorno
        // convertendo o seu conteúdo de string para o formato json, por meio de JSON.parse
        const obj_return = JSON.parse(response._body);
        // carrego meu arrey de filmes list_movies com o campo results do JSON de retorno
        this.list_movies = obj_return.results;
        
        // retorno para o console a url da conexão http e o objeto retornado
        console.log('URL utilizada para o feed');
        console.log(data.url);
        console.log('Objeto retornado para montagem do feed');
        console.log(obj_return);
      },
      error => { this.navCtrl.push(LoadFailPage) }
    );

  }

}
