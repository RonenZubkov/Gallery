/**
 * Created by ronen on 08/08/2016.
 */

import { PLATFORM_DIRECTIVES } from '@angular/core';
import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';

// import {LayerListComponent} from './layer/layer-list.component';
// import {LayerComponent} from './layer/layer.component';
// import {LayerEditComponent} from './layer/layer-edit.component';
// import {ChatRoomComponent} from './chat/chat-room.component';
import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
// import {MapComponent} from "./shared/map-component/map.component";

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  // { path: '', component:  },
//   { path: 'layer', component: LayerListComponent },
//   { path: 'layer/edit', component: LayerEditComponent },
//   { path: 'layer/edit/:id', component: LayerEditComponent },
//   { path: 'layer/:id/:name', component: LayerComponent },
//
//   // { path: 'shared/map-component/', component: MapComponent },
//   // { path: 'chat', component: ChatRoomComponent }
//
];
//
export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
