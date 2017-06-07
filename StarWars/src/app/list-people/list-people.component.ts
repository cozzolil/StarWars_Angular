import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../_services/people.service';
import { Person } from '../_models/person';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service'
@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  person: Person[];
  nPage: number = 1;
  selectedID: string;
  isLoading: boolean = false;
  constructor(private people: PeopleService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.isLoading = true;
    this.people.getData(this.nPage)
      .subscribe(r => this.person = r,
      r => alert('Errore Sconosciuto'),
      () => this.isLoading = false );

  }

  prevPage() {
    if (this.nPage > 1) {
      this.nPage--;
      this.getPeople();
    }
  }

  nextPage() {
    if (this.nPage < 9) {
      this.nPage++;
      this.getPeople();
    }
  }

  onSelect(url: string) {
    this.selectedID = url.substring(url.indexOf("/people/") + 8, url.length - 1);
    this.router.navigate(['detail', this.selectedID]);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }


}
