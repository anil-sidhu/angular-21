import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-display-count',
  imports: [],
  templateUrl: './display-count.html',
  styleUrl: './display-count.css',
})
export class DisplayCount {
constructor(public state:Counter){}
}
