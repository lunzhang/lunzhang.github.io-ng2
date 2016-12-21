import { Component, ngAfterViewInit,ViewChild } from '@angular/core';
import { NgGrid } from 'ng2-grid-component';
import { ContentComponent } from './content/content.component';

@Component({
    moduleId: module.id,
    selector: 'grid-page',
    template: '<div class="container-fluid"><div class="row"><div class="col-xs-12">'+
    '<button (click)="addWidget()" class="btn btn-primary" style="margin: 25px;">Add Widget!</button>'+
    '</div></div></div>'+
    '<grid></grid>'
})
export class GridComponent implements ngAfterViewInit {

    @ViewChild(NgGrid) grid: NgGrid;

    ngAfterViewInit() {
        for (let i = 0; i < 5; i++) {
            var widget = this.grid.addWidget();
            widget.content = ContentComponent;
        }
    }

    addWidget(e){
      var widget = this.grid.addWidget();
      widget.content = ContentComponent;
    }
}
