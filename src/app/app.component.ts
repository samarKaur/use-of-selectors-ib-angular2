import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Status: boolean = true; 
   clicked(event) { 
      this.Status = false; 
      
   } 
}
