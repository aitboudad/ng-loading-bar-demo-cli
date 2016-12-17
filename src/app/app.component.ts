import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _http: Http) {}

  startHttpRequest() {
    this._http.get('/app/heroes/?name=^j');
  }
}
