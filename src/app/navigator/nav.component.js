/**
 * Created by ronen on 08/08/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NavigatorComponent = (function () {
    function NavigatorComponent() {
        this.navItems = [
            { navName: 'Option1' },
            { navName: 'Option2' }
        ];
    }
    NavigatorComponent.prototype.ngOnInit = function () { };
    NavigatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navigator',
            template: "\n                <ul>\n                  <li *ngfor=\"let navItem of navItems\">{{navItem.navName}}</li> \n                </ul>\n              "
        })
    ], NavigatorComponent);
    return NavigatorComponent;
}());
exports.NavigatorComponent = NavigatorComponent;
