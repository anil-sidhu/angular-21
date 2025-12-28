import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  imports: [],
  template: `
    <p>
     <input class='search-box' type='text' placeholder='start type'>
    </p>
  `,
  styles: `.search-box{width:300px}`,
})
export class SearchBox {

}
