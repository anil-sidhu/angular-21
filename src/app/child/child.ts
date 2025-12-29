import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
@Input() userName:string|undefined
@Output() selectedUser= new EventEmitter()
@Output() deleteUser= new EventEmitter()

whichUser(name:string | undefined){
  this.selectedUser.emit(name)
}
delete(name:string | undefined){
  this.deleteUser.emit(name)
}
} 
    