import { Component, OnInit, Input } from '@angular/core';
import { About, TECHLIST } from '../myClasses/about';
import { Tech } from '../myClasses/tech';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() aboutInfo!: About;
  @Input() listInfo!: Tech[];
  constructor() { }

  ngOnInit(): void {
  }

}
