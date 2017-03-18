import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>` + 
  '<md-spinner></md-spinner>',
})
export class AppComponent  { name = 'Angular'; }
