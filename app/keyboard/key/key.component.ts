import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Events } from '../services/events.service';

@Component({
  moduleId: module.id,
  selector: 'key',
  templateUrl: './key.component.html'
})

export class KeyComponent {

  timer;
  activated : boolean = false;
  @Input() value;
  @Output() onEvent = new EventEmitter();

  constructor(){
  }

  activate(){
    this.activated = true;
    this.timer = setTimeout(()=>{
      this.onEvent.emit(Events.lose);
    },2000);
    return this;
  }

  deactivate(){
    clearTimeout(this.timer);
    this.activated = false;
  }

}
