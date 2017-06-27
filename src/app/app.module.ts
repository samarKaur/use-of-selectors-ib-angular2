import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {Component1} from './component1/component1.component'
import {Component2} from './component2/component2.component'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
    <c1></c1>
    
    <br/>
    <c2></c2>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = 'Angular2'
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, Component1, Component2 ],
  bootstrap: [ App ]
})
export class AppModule {}