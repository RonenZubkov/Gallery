/**
 * Created by ronen on 08/08/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'gallery',
    template: `
                
                  <h1>Gallery</h1>
                  <div>
                    <stage *ngFor="let item of items">
                      <div> 
                        <span>{{item.projectName}}</span>
                        <img [src]="imgUrl">
                      </div>      
                    </stage>
                  </div>
                
              `,
    providers:[]
})

export class GalleryComponent implements OnInit {

  // private items: {} = {};
  private imgUrl: string = '../app/shared/pics/twitter.png';

  constructor() {
  }

  ngOnInit() {

  }

  private items = [
    {id: 1, projectName: 'Calculator'},
    {id: 2, projectName: 'BookStore'}
  ];

}
