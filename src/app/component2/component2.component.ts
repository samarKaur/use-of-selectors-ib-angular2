import { Component, OnInit } from '@angular/core';
import {MyModel} from './../sample'

@Component({
  selector: 'c2',
  template: `
    <div>
      <h2>Hello {{lala}}</h2>
    </div>
  `,
})
export class Component2 extends MyModel {
  constructor(){
    super();
    this.appendToLala(" nenene");
  }
}