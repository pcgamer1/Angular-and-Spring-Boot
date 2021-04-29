import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todo: Todo = new Todo(-1, '', new Date(), false);
  id: number = 1;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoService
        .retrieveTodo('in28minutes', this.id)
        .subscribe((resp) => {
          this.todo = resp;
        });
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService
        .createTodo('in28minutes', this.todo)
        .subscribe((resp) => {
          this.router.navigate(['todos']);
        });
    } else {
      this.todoService
        .updateTodo('in28minutes', this.todo)
        .subscribe((resp) => {
          this.router.navigate(['todos']);
        });
    }
  }
}
