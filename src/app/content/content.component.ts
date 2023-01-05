import { Component, OnInit } from '@angular/core';
import { Home } from '../myClasses/home';
import { Tech } from '../myClasses/tech';
import { About, TECHLIST } from '../myClasses/about';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Bind home info
  home: Home = {
    title: "Hi, I'm Xiaoya Zou👋",
    details1: "// My first name can be pronounced as \"Shi-ao-ya\"",
    details2: "// I'm a college student and I love building things",
    details3: "// Nice to meet you!"
  };

  // Bind about info
  about: About = {
    title: "About Me",
    details: "I'm a third-year student at Sheridan College. I'm interested in full-stack development and have been working with these technologies recently:",
  }

  tech: Tech[] = TECHLIST;

}
