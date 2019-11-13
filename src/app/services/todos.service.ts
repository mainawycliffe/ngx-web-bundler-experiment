import { Injectable } from '@angular/core';
import { Todos, Todo } from '../todos';
import { BehaviorSubject, Observable, from, ReplaySubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todos = [
    { isDone: false, todo: 'buy milk' },
    { isDone: false, todo: 'buy groceries' },
    { isDone: false, todo: 'buy bread' },
    { isDone: false, todo: 'go to school' }
  ];

  todos$: BehaviorSubject<Todos> = new BehaviorSubject(this.todos);

  constructor() {}

  getTodos(): Observable<Todos> {
    return this.todos$;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);

    // notify listeners
    this.todos$.next(this.todos);
  }

  toggleTodoStatus(todo: Todo) {
    this.todos = this.todos.map(v => {
      if (todo.todo === v.todo) {
        return {
          isDone: !todo.isDone,
          todo: todo.todo
        };
      }
      return v;
    });

    // notify listeners
    this.todos$.next(this.todos);
  }
}
