import { Component } from '@angular/core';
import { single } from '../data';

@Component({
  moduleId: 'module.id',
  selector: 'pie',
  template: '<ngx-charts-pie-chart  [results]="single" [scheme]="colorScheme"  '+
  '[view]="view" [legend]="true"'+
  '[labels]="true"></ngx-charts-pie-chart >'
})
export class PieComponent {
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
