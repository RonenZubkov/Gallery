import { Component } from '@angular/core';
import {GalleryComponent} from './gallery/gallery.component';
import {NavigatorComponent} from './navigator/nav.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [GalleryComponent,NavigatorComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!@';
}
