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
var row_component_1 = require('./row/row.component');
var events_service_1 = require('./services/events.service');
var KeyboardComponent = (function () {
    function KeyboardComponent() {
        this.rows = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
        this.activatedKeys = {};
        this.inProgress = false;
        this.score = 0;
        this.highScore = localStorage.kbHighScore || 0;
        this.gameSpeed = 1000;
    }
    KeyboardComponent.prototype.start = function () {
        var _this = this;
        if (!this.inProgress) {
            this.inProgress = true;
            this.timer = setInterval(function () {
                var rowNum = Math.floor((Math.random() * 4));
                var keyNum = Math.floor((Math.random() * _this.rows[rowNum].length));
                var key = _this.rowComponents._results[rowNum].activateKey(keyNum);
                _this.activatedKeys[key.value] = key;
            }, this.gameSpeed);
        }
    };
    KeyboardComponent.prototype.end = function () {
        this.inProgress = false;
        clearInterval(this.timer);
        for (var prop in this.activatedKeys) {
            this.activatedKeys[prop].deactivate();
        }
        this.activatedKeys = {};
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.kbHighScore = this.highScore;
        }
        this.score = 0;
        this.gameSpeed = 1000;
    };
    KeyboardComponent.prototype.rowEvent = function (event) {
        switch (event) {
            case events_service_1.Events.lose:
                this.end();
                break;
        }
    };
    KeyboardComponent.prototype.handleKeyboardEvent = function (e) {
        if (this.inProgress) {
            if (this.activatedKeys[e.key]) {
                this.activatedKeys[e.key].deactivate();
                delete this.activatedKeys[e.key];
                this.score++;
                this.gameSpeed = this.gameSpeed > 600 ? 1000 - (this.score * 5) : 600;
            }
            else {
                this.end();
            }
        }
        else {
            if (e.key == "Enter") {
                this.start();
            }
        }
    };
    __decorate([
        core_1.ViewChildren(row_component_1.RowComponent), 
        __metadata('design:type', Object)
    ], KeyboardComponent.prototype, "rowComponents", void 0);
    __decorate([
        core_1.HostListener('document:keypress', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], KeyboardComponent.prototype, "handleKeyboardEvent", null);
    KeyboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'keyboard',
            templateUrl: './keyboard.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], KeyboardComponent);
    return KeyboardComponent;
}());
exports.KeyboardComponent = KeyboardComponent;
//# sourceMappingURL=keyboard.component.js.map