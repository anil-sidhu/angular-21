
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 status=signal("notStarted")
 handleSwitch(event:Event){
  const target = event.target as HTMLSelectElement
  this.status.set(target.value)
 }
}
