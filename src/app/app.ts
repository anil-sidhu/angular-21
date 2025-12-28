
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SearchBox } from './search-box/search-box';


@Component({
  selector: 'app-root',
  imports: [CommonModule,SearchBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nums=signal([0,1,2,3,4,5])
}
