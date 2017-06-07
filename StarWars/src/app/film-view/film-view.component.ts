import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../_models/film';
import { FilmService } from '../_services/film.service';
@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  @Input() filmActed: string[];
  filmDetail: Film[] = [];
  selected: number = 0;
  idFilms: string[] = [];
  constructor(private film: FilmService) { }

  ngOnInit() {
    for (let film of this.filmActed) {
      let currentID = this.estraiId(film);
      this.film.getFilm(currentID).subscribe(f => { this.filmDetail.push(f) });
    }

  }

  estraiId(url: string) {
    let currentID = url.substring(url.indexOf("/films/") + 7, url.length - 1);
    return currentID;
  }

  Selezionato(indice){
    this.selected = indice;
  }



}
