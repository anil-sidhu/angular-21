
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks = signal([
    { id: 0, title: "Team lunch", completed: false }
  ])
  title = signal('')

  addTask() {
    if (this.title()) {
      this.tasks.update((item) => (
        [...item, { id: this.tasks().length, title: this.title(), completed: false }]
      ))
      this.title.set('');
    }

  }
  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id != id))
  }

}
