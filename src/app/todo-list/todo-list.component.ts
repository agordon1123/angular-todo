import { Component, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = data;

  constructor() { }
  
  ngOnInit(): void {
  }

}
