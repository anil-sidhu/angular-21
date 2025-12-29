
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-root',
  imports: [CommonModule,DisplayCount,ControlCount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
