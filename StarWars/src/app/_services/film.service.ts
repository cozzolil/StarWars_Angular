import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/map';
import { Film } from '../_models/film';
@Injectable()
export class FilmService {
  constructor(private http: Http) { }

  getFilm(id: string): Observable<Film> {
    return this.http.get('http://swapi.co/api/films/' + id + '/')
      .map(this.extractData_film)
      .catch(this.handleError)
  }

  private extractData_film(res: Response) {
    let a= res;
    let b= res.json();
    return res.json();
    
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

