import { Component } from '@angular/core';
import { RowComponent } from './row/row.component';

@Component({
  moduleId: module.id,
  selector: 'keyboard',
  templateUrl: './keyboard.component.html'
})

export class KeyboardComponent {

  rows=[['1','2','3','4','5','6','7','8','9','0']];
  
  constructor(){

  }

  start(){

  }

}
