import { Component,Input,ElementRef,ViewChildren } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  moduleId: module.id,
  selector: 'row',
  templateUrl: './row.component.html'
})

export class RowComponent implements ngAfterViewInit{

  @ViewChildren(KeyComponent) private keyComponents;

  @Input() keys;

  constructor(public elem:ElementRef){
  }

  ngAfterViewInit(){
    var length = (100/this.keys.length).toString()+'%';
    $(this.elem.nativeElement).find('key').css({'width':length});
  }

  activateKey(i){
    this.keyComponents._results[i].activate();
  }

}
