
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { CurrencyConvertorPipe } from './custom-pipe/currency-convertor-pipe';
@Component({
  selector: 'app-root',
  imports: [CommonModule,TrimTextPipe,CurrencyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title=signal("Code step by step")
  name=signal("My name is anil sidhu")
  amount=signal(20)

}
