import { Component,ViewChildren,HostListener } from '@angular/core';
import { RowComponent } from './row/row.component';
import { Events } from './services/events.service';

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
  timer;
  activatedKeys= {};
  inProgress=false;
  score = 0;
  highScore = localStorage.kbHighScore || 0;
  gameSpeed = 1000;

  start(){
    if(!this.inProgress){
      this.inProgress = true;
      this.timer = setInterval(()=>{
        var rowNum = Math.floor((Math.random() * 4));
        var keyNum = Math.floor((Math.random() * this.rows[rowNum].length));
        var key = this.rowComponents._results[rowNum].activateKey(keyNum);
        this.activatedKeys[key.value] = key;
      }, this.gameSpeed);
    }
  }

  end(){
    this.inProgress = false;
    clearInterval(this.timer);
    for(var prop in this.activatedKeys){
      this.activatedKeys[prop].deactivate();
    }
    this.activatedKeys = {};
    if(this.score > this.highScore){
      this.highScore = this.score;
      localStorage.kbHighScore = this.highScore;
    }
    this.score = 0;
    this.gameSpeed = 1000;
  }

  rowEvent(event){
    switch(event){
      case Events.lose:
        this.end();
        break;
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    if(this.inProgress){
      if(this.activatedKeys[e.key]){
        this.activatedKeys[e.key].deactivate();
        delete this.activatedKeys[e.key];
        this.score++;
        this.gameSpeed = this.gameSpeed > 600 ? 1000 - (this.score * 5) : 600;
      }else{
        this.end();
      }
    } else{
      if(e.key == "Enter"){
        this.start();
      }
    }
  }

}
