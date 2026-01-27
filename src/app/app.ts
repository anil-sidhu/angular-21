
import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { TrimPipe } from './pipes/trim-pipe';
@Component({
  selector: 'app-root',
  imports: [CommonModule,TrimPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  text = 'Angular Custom Pipe Example Code Step By Step';
}

