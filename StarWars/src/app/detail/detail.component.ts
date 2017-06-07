import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../_services/people.service';

import { Person } from '../_models/person';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  character: Person;
  id: string;
  constructor(private people: PeopleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.people.getCharacter(this.id)
      .subscribe(r => this.character = r);
  }

}
