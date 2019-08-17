import { Component } from '@angular/core';

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
    this.number = this.number + 1;
  }
  onNameChanged(newName){
    this.rootName = newName;
  }
}
