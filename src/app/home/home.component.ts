import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../myClasses/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() homeInfo!: Home;
  constructor() { }

  ngOnInit(): void {
  }

}
