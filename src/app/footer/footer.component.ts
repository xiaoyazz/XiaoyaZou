import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  github() {
    window.open("https://github.com/xiaoyazz");
  }

  linkedIn() {
    window.open("https://www.linkedin.com/in/xiaoyazou/");
  }

  mail() {
    window.open("mailto:xiaoyaxyz@gmail.com");
  }

}
