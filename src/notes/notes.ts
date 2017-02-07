import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'notes',
  templateUrl: './notes.html'
})
export class Notes {

  currentNav = 'ng2';
  navigation={
    'ng2':true,
    'algo':false,
    'design':false,
    'OO':false,
    'es6':false
  }

  setNav(nav){
    this.navigation[this.currentNav] = false;
    this.navigation[nav] = true;
    this.currentNav = nav;
  }

}
