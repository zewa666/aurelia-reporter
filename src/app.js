import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Report Builder';
    config.map([
      { route: ['','builder'],  moduleId: './builder',      nav: true, title:'Builder' },
    ]);

    this.router = router;
  }
}
