
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef} from '@angular/core';
import { UserDetails } from './user-details/user-details';

@Component({
  selector: 'app-root',
  imports: [CommonModule,UserDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild("container",{read: ViewContainerRef})
  container: ViewContainerRef | undefined

  async loadUserDetails(){
    this.container?.clear()

    const {UserDetails}= await import('./user-details/user-details')
    this.container?.createComponent(UserDetails)
    
  }
}
