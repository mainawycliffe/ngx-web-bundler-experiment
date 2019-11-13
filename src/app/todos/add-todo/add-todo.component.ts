import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output()
  onerror: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder = 'Buy Bread, Buy Milk ...';

  todoControl = new FormControl(null, Validators.required);

  constructor(private todosService: TodosService) {}

  ngOnInit() {}

  onAdd() {
    if (!this.todoControl.valid) {
      this.onerror.emit('Todo is required!');
      return;
    }

    this.todosService.addTodo({ todo: this.todoControl.value, isDone: false });
  }
}
