import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserData } from './user-data/user-data';
import { AdminData } from './admin-data/admin-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserData,AdminData],
  templateUrl: './app.html',
  // styleUrl: './app.css'
  styleUrls:["./app.css","./common.css"]
})
export class App {

}
