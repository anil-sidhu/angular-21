
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLogin= signal(false)
  show=signal(true)
  status=signal('error')

  handleLogin(status:boolean){
    this.isLogin.set(status)
  }
  handleStatus(event:Event){
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value)
  }
}
