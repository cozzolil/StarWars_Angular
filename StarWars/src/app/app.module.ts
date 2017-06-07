import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app.routing';


//component----------------------------
import { AppComponent } from './app.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { DetailComponent } from './detail/detail.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//services-----------------------------------------
import { PeopleService } from './_services/people.service';
import { FilmService } from './_services/film.service';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth-guards'

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    DetailComponent,
    FilmViewComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [
    PeopleService,
     FilmService,
     AuthService,
      AuthGuard,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
