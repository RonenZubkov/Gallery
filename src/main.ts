import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { provide } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '../src/app/app.routes';




if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
