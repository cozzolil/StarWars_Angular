import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  isLoading: boolean = false;
  ErrorInLogin:boolean = false;
  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    this.auth.login(this.username, this.password)
      .subscribe(r => this.router.navigate(['/list']),
      error => {
          this.ErrorInLogin = true;

          this.isLoading = false;
      });

  }


}
