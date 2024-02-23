import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDoItem } from '../classes/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class ToDoItemsService {
  constructor() {}

  private todoItems: ToDoItem[] = [
    new ToDoItem(
      1,
      'Buy Groceries',
      'Go to the store and buy groceries',
      false
    ),
    new ToDoItem(2, 'Do Laundry', 'Wash and fold clothes', false),
    new ToDoItem(3, 'Mow the Lawn', 'Mow the front and back yard', false),
    new ToDoItem(4, 'Clean the House', 'Vacuum and dust the house', false),
    new ToDoItem(5, 'Walk the Dog', 'Take the dog for a walk', false),
  ];

  todoItemsUpdated = new Subject<ToDoItem[]>();

  getToDoItems() {
    return this.todoItems;
  }

  addToDoItem({ title, description }: { title: string; description: string }) {
    this.todoItems.push(
      new ToDoItem(this.todoItems.length + 1, title, description, false)
    );
    console.log(this.todoItems);
    this.todoItemsUpdated.next(this.todoItems.slice()); // Emit the updated todo items
  }

  markingItem({ id }: { id: number }) {
    const itemIndex = this.todoItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      this.todoItems[itemIndex].complete = !this.todoItems[itemIndex].complete;
      this.todoItemsUpdated.next(this.todoItems); // Emit the updated todo items
    }
  }
}
