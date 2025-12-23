import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 user = signal("anil")
 users= signal(['anil','sam','peter'])


 updateSignal(){
  this.user.set("peter")
  this.users.update((preVal)=>[...preVal,'bruce'])
 }
}
