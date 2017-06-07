import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth-guards';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'list', component: ListPeopleComponent, canActivate: [AuthGuard] },
    { path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
    //{ path: '**', component: ListFilmComponent }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRouterModule { }
