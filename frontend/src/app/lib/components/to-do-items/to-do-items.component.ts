import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoItemsService } from '../../services/to-do-items.service';
import { ToDoItem } from '../../classes/ToDoItem';
import { Subscription } from 'rxjs';
import { ButtonDirective } from '../../directives/button.directive';

@Component({
  selector: 'to-do-items',
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: './to-do-items.component.html',
})
export class ToDoItemsComponent implements OnInit, OnDestroy {
  constructor(private todoItemService: ToDoItemsService) {}

  todoItems: ToDoItem[] = [];
  private todoItemsSub!: Subscription;

  ngOnInit() {
    this.todoItems = this.todoItemService.getToDoItems();
    this.todoItemsSub = this.todoItemService.todoItemsUpdated.subscribe(
      (todoItems: ToDoItem[]) => {
        this.todoItems = todoItems;
        console.log('The subscription is working!');
      }
    );
  }

  ngOnDestroy() {
    this.todoItemsSub.unsubscribe();
  }
}
