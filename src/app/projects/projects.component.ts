import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quiz() {
    window.open("https://xiaoyazz.github.io/Quiz/");
  }

  quizCode() {
    window.open("https://github.com/xiaoyazz/Quiz");
  }

  todolist() {
    window.open("https://xiaoyazz.github.io/todo-list-app/");
  }

  todolistCode() {
    window.open("https://github.com/xiaoyazz/todo-list-app");
  }

  bakeryCode() {
    window.open("https://github.com/xiaoyazz/MyBakery");
  }
}
