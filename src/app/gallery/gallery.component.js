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
var GalleryComponent = (function () {
    function GalleryComponent() {
        // private items: {} = {};
        this.imgUrl = '../app/shared/pics/twitter.png';
        this.items = [
            { id: 1, projectName: 'Calculator' },
            { id: 2, projectName: 'BookStore' }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gallery',
            template: "\n                \n                  <h1>Gallery</h1>\n                  <div>\n                    <stage *ngFor=\"let item of items\">\n                      <div> \n                        <span>{{item.projectName}}</span>\n                        <img [src]=\"imgUrl\">\n                      </div>      \n                    </stage>\n                  </div>\n                \n              ",
            providers: []
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
