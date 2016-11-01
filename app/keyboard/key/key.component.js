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
var core_1 = require('@angular/core');
var events_service_1 = require('../services/events.service');
var KeyComponent = (function () {
    function KeyComponent() {
        this.activated = false;
        this.onEvent = new core_1.EventEmitter();
    }
    KeyComponent.prototype.activate = function () {
        var _this = this;
        this.activated = true;
        this.timer = setTimeout(function () {
            _this.onEvent.emit(events_service_1.Events.lose);
        }, 2000);
        return this;
    };
    KeyComponent.prototype.deactivate = function () {
        clearTimeout(this.timer);
        this.activated = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], KeyComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], KeyComponent.prototype, "onEvent", void 0);
    KeyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'key',
            templateUrl: './key.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], KeyComponent);
    return KeyComponent;
}());
exports.KeyComponent = KeyComponent;
//# sourceMappingURL=key.component.js.map