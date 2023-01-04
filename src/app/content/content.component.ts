import { Component, OnInit } from '@angular/core';
import { Home } from '../myClasses/home';

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
    title: "Hi, I'm Xiaoya 👋",
    details1: "// My first name can be pronounced as \"Shi-ao-ya\"",
    details2: "// I'm a college student and I love building things",
    details3: "// Nice to meet you!"
  };

}
