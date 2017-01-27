"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_grid_component_1 = require("ng2-grid-component");
var bar_component_1 = require("./bar/bar.component");
var pie_component_1 = require("./pie/pie.component");
var GridComponent = (function () {
    function GridComponent() {
        this.customConfig = {
            'minWidth': 3,
            'minHeight': 3,
            'colWidth': 250,
            'rowHeight': 150,
            "maxRow": 4,
            "maxCol": 6,
            'theme': 'light'
        };
    }
    GridComponent.prototype.ngAfterViewInit = function () {
        var widget = this.grid.addWidget();
        widget.widgetTitle = "Stackoverflow Top Tech 2016";
        widget.innerComponent = bar_component_1.BarComponent;
        var widget = this.grid.addWidget();
        widget.widgetTitle = "Stackoverflow Top Tech 2016";
        widget.innerComponent = pie_component_1.PieComponent;
    };
    GridComponent.prototype.addBar = function (e) {
        var widget = this.grid.addWidget();
        widget.widgetTitle = "Stackoverflow Top Tech 2016";
        widget.innerComponent = bar_component_1.BarComponent;
    };
    GridComponent.prototype.addPie = function (e) {
        var widget = this.grid.addWidget();
        widget.widgetTitle = "Stackoverflow Top Tech 2016";
        widget.innerComponent = pie_component_1.PieComponent;
    };
    return GridComponent;
}());
__decorate([
    core_1.ViewChild(ng2_grid_component_1.NgGrid),
    __metadata("design:type", ng2_grid_component_1.NgGrid)
], GridComponent.prototype, "grid", void 0);
GridComponent = __decorate([
    core_1.Component({
        moduleId: 'module.id',
        selector: 'grid-page',
        template: '<div class="container-fluid"><div class="row"><div class="col-xs-12">' +
            '<button (click)="addBar()" class="btn btn-primary" style="margin: 25px;">Add Bar Chart!</button>' +
            '<button (click)="addPie()" class="btn btn-primary" style="margin: 25px;">Add Pie Chart!</button>' +
            '</div></div>  <div class="col-xs-12"><grid [customConfig]="customConfig"></grid></div> </div>'
    }),
    __metadata("design:paramtypes", [])
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map