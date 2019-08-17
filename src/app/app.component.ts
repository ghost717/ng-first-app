import { Component } from '@angular/core';
import { random } from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  rootName = 'Dawis';
  number = 0;
  rootItems = ['Apples', 'Bananas'];

  onItemWasAdded(newItem){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
  onIncrease(){
    // this.number = this.number + 1;
    this.number = random(1, 10);
  }
  onNameChanged(newName){
    this.rootName = newName;
  }
}
