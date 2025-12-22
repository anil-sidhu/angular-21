import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 name:WritableSignal<string> = signal('')

 resetValue(){
  this.name.set("Anil Sidhu")
 }
 setValue(val:string){
  this.name.set(val)
 }

}
