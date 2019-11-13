import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todos, Todo } from '../../todos';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos$: Observable<Todos> = null;

  errorMessage = '';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos$ = this.todosService
      .getTodos()
      .pipe(tap(todos => console.log(todos)));
  }

  toggleTodoStatus(todo: Todo) {
    this.todosService.toggleTodoStatus(todo);
  }
}
