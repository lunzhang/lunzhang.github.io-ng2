import { Component,ViewChildren } from '@angular/core';
import { RowComponent } from './row/row.component';

@Component({
  moduleId: module.id,
  selector: 'keyboard',
  templateUrl: './keyboard.component.html'
})

export class KeyboardComponent implements ngAfterViewInit{

  @ViewChildren(RowComponent) private rowComponents;

  rows=[['1','2','3','4','5','6','7','8','9','0'],
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m']];

  constructor(){

  }

  ngAfterViewInit(){

  }

  start(){
    this.rowComponents._results[0].activateKey(0);

  }

}
