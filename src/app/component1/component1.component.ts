import { Component, OnInit } from '@angular/core';
import {MyModel} from './sample'

@Component({
  selector: 'c1',
  template: `
    <div>
      <h2>Hello {{lala}}</h2>
    </div>
  `,
})
export class Component1 extends MyModel {
  constructor(){
    super();
    this.appendToLala(" nenene");
  }
}