import { Component } from '@angular/core';
import { single } from '../data';

@Component({
  moduleId: 'module.id',
  selector: 'bar',
  template: '<ngx-charts-bar-vertical  [results]="single" [scheme]="colorScheme"  '+
  '[view]="view" [xAxis]="true" [yAxis]="true" [legend]="true"'+
  '[showXAxisLabel]="true" [showYAxisLabel]="true" [yAxisLabel]="yAxisLabel"'+
  '[xAxisLabel]="xAxisLabel"></ngx-charts-bar-vertical>'
})
export class BarComponent {
  single: any[];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  view: any[] = [700, 350];
  xAxisLabel = 'Technology';

  yAxisLabel = 'Users';
  constructor() {
    Object.assign(this, {single})
  }
}
