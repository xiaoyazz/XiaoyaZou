import { Component } from '@angular/core';
import { Home } from './myClasses/home';
import { About, TECHLIST } from './myClasses/about';
import { Tech } from './myClasses/tech';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XiaoyaZou';

  // Bind about info
  about: About = {
    title: "About Me",
    details: "I'm a third-year student at Sheridan College. I'minterested in full-stack development and have been working with these technologies recently:",
  }
  techList: Tech[] = TECHLIST;
}
