import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/map';
import { Person } from '../_models/person';
@Injectable()
export class PeopleService {
  constructor(private http: Http) { }


  getData(num: number): Observable<Person[]> {
    return this.http.get('http://swapi.co/api/people/?page=' + num)
      .map(this.extractData)
      .catch(this.handleError)
  }


  getCharacter(id: string): Observable<Person> {
    return this.http.get('http://swapi.co/api/people/' + id + '/')
      .map(this.extractData_character)
      .catch(this.handleError)
  }

  private extractData_character(res: Response) {
    return res.json();
    
  }

  private extractData(res: Response) {
    return res.json().results;
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

