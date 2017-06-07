import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../_models/user';
@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    .map((response : Response) => {
      let user = response.json();
      if(user && user.token){
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    })
  }


  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user:User){
    return this.http.post('/api/users', user)
    .map((response:Response)=>{
      response.json();
    })
  }

}
