import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data:WritableSignal<string > = signal<string>("anil");
  users:WritableSignal<string[]>= signal(['anil','sidhu','peter'])
  speed:Signal<number> = computed<number>(()=>90)

  handleData(){
    this.data.set("Sidhu")
    this.users.update((item)=>[...item,'bruce'])
    console.log(this.users());
    
  
  }
}
