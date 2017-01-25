import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { NgGrid } from 'ng2-grid-component';
import { ContentComponent } from './content/content.component';

@Component({
    moduleId: 'module.id',
    selector: 'grid-page',
    template: '<div class="container-fluid"><div class="row"><div class="col-xs-12">'+
    '<button (click)="addWidget()" class="btn btn-primary" style="margin: 25px;">Add Widget!</button>'+
    '</div></div>  <div class="col-xs-12"><grid [customConfig]="customConfig"></grid></div> </div>'
})
export class GridComponent implements AfterViewInit {

    @ViewChild(NgGrid) grid: NgGrid;
    public customConfig = {
          'maxWidth':2,
          'maxHeight':2,
          "maxRow":4,
          "maxCol":6,
          'theme':'sky'
        };
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
