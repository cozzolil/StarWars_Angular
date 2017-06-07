import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();
  isLoading: boolean = false;
  ErrorinRegistration: boolean = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registrati() {
    this.isLoading = true;
    this.auth.register(this.newUser).
      subscribe(r => this.router.navigate(['login']),
      (error) => {
        this.ErrorinRegistration = true,
          this.isLoading = false;
      });
  }


}
