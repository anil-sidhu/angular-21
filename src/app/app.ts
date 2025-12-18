import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  btnDisable=true;
  inputReadonly=false;
  url="https://angular.io/assets/images/logos/angular/angular.png"

  toggle(){
    this.btnDisable=!this.btnDisable;
  }
}
