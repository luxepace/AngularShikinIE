import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddTodo } from 'src/store/model/todo.model';
import { TodoState } from 'src/store/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTodo: string = '';

  @Select(TodoState.getTodos) todos$!: Observable<string[]>;

  constructor(private store: Store) {}

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.store.dispatch(new AddTodo(this.newTodo));
      this.newTodo = '';
    }
  }

}