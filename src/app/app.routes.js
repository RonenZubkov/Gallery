/**
 * Created by ronen on 08/08/2016.
 */
"use strict";
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
// import {LayerListComponent} from './layer/layer-list.component';
// import {LayerComponent} from './layer/layer.component';
// import {LayerEditComponent} from './layer/layer-edit.component';
// import {ChatRoomComponent} from './chat/chat-room.component';
var router_1 = require('@angular/router');
// import {MapComponent} from "./shared/map-component/map.component";
var routes = [
    { path: '', component: app_component_1.AppComponent },
];
//
exports.ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: router_1.ROUTER_DIRECTIVES, multi: true }
];
//# sourceMappingURL=app.routes.js.map