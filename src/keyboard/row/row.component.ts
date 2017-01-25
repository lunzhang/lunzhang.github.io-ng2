import { Component,EventEmitter,Output,Input,ElementRef,ViewChildren,AfterViewInit } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  moduleId: 'module.id',
  selector: 'row',
  templateUrl: './row.component.html'
})

export class RowComponent implements AfterViewInit{

  @ViewChildren(KeyComponent) private keyComponents;
  @Input() keys;
  @Output() onEvent = new EventEmitter();

  constructor(public elem:ElementRef){
  }

  //length of each row depends on # of keys
  ngAfterViewInit(){
    var length = (100/this.keys.length).toString()+'%';
    this.elem.nativeElement.querySelectorAll('key').forEach((key)=>{
      key.style.width = length; 
    });
  }

  getKey(i){
    return this.keyComponents._results[i];
  }

  keyEvent(event){
    this.onEvent.emit(event);
  }

  errorKey(i){
    return this.keyComponents._results[i].error();
  }

}
