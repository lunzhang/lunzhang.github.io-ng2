import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { NgGrid } from 'ng2-grid-component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

@Component({
  moduleId: 'module.id',
  selector: 'grid-page',
  template: '<div class="container-fluid"><div class="row"><div class="col-xs-12">'+
  '<button (click)="addBar()" class="btn btn-primary" style="margin: 25px;">Add Bar Chart!</button>'+
  '<button (click)="addPie()" class="btn btn-primary" style="margin: 25px;">Add Pie Chart!</button>'+
  '</div></div>  <div class="col-xs-12"><grid [customConfig]="customConfig"></grid></div> </div>'
})
export class GridComponent implements AfterViewInit {

  @ViewChild(NgGrid) grid: NgGrid;
  public customConfig = {
    'minWidth':3,
    'minHeight':3,
    'colWidth':250,
    'rowHeight':150,
    "maxRow":4,
    "maxCol":6,
    'theme':'light'
  };
  ngAfterViewInit() {
    var widget = this.grid.addWidget();
    widget.widgetTitle = "Stackoverflow Top Tech 2016"
    widget.innerComponent = BarComponent;
    var widget = this.grid.addWidget();
    widget.widgetTitle = "Stackoverflow Top Tech 2016"
    widget.innerComponent = PieComponent;
  }

  addBar(e){
    var widget = this.grid.addWidget();
    widget.widgetTitle = "Stackoverflow Top Tech 2016"
    widget.innerComponent = BarComponent;
  }

  addPie(e){
    var widget = this.grid.addWidget();
    widget.widgetTitle = "Stackoverflow Top Tech 2016"
    widget.innerComponent = PieComponent;
  }
}
