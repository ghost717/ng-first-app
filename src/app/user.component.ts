import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>Hello {{ name }}!</p>
    <p>I'm UserComponent</p>
  `
})
export class UserComponent {
  name = 'Dawid';

  onUserInput(event){
    this.name = event.target.value;
  }
}
