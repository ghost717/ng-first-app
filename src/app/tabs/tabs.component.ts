import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [StarWarsService]
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  swSerwice: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = swService.getCharacters(this.chosenList);
    return this.characters;
  }
}
