import { Component,Input,ElementRef } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  moduleId: module.id,
  selector: 'row',
  templateUrl: './row.component.html'
})

export class RowComponent implements ngAfterViewInit{

  @Input() keys;

  constructor(public elem:ElementRef){
  }

  ngAfterViewInit(){
    var length = (100/this.keys.length).toString()+'%';
    console.log($(this.elem.nativeElement));
    $(this.elem.nativeElement).find('key').css({'width':length});
    window.e = this.elem;
  }

}
