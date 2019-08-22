import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';
  swService: StarWarsService;

  constructor(swService: StarWarsService){
    this.swService = swService;
  }

  ngOnit() {
    this.swService.fetchCharacters();
  }
}
