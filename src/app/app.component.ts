import { Component } from '@angular/core';
import 'lodash';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  rootName = 'Dawis';
  number = 0;

  onIncrease(){
    // this.number = this.number + 1;
    this.number = _.random(1, 10);
  }
  onNameChanged(newName){
    this.rootName = newName;
  }
}
