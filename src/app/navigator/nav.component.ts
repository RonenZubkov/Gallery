/**
 * Created by ronen on 08/08/2016.
 */

import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navigator',
    template: `
                <ul>
                  <li *ngFor="let navItem of navItems">{{navItem.navName}}</li> 
                </ul>
              `
})

export class NavigatorComponent implements OnInit {

    constructor() { }

    ngOnInit() { }


    private navItems = [
      {navName: 'Option1'},
      {navName: 'Option2'}
    ]
}
