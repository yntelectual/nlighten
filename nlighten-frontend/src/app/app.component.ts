import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><router-outlet name="overlay"></router-outlet>',
  styleUrls: []
})
export class AppComponent {
  title = 'Nlighten';
}
