import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public completed: boolean
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;

  constructor(private todoService: TodoDataService) {}

  ngOnInit() {
    this.todoService.retrieveAllTodos('sarthak').subscribe((resp) => {
      this.todos = resp;
      console.log(resp);
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('sarthak', id).subscribe((resp) => {
      this.message = 'Todo has been deleted';
    });
  }
}
