import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  count = 0;
  counter(action: string) {
    if (action == 'minus') {
      this.count>0 && this.count--
    } else {
      this.count++
    }
// this.showUserName();
  }

  showUserName(){
    alert("Hello")
  }
}
