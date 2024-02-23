import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputTextDirective } from './lib/directives/input-text.directive';
import { ButtonDirective } from './lib/directives/button.directive';
import { ToDoItemsService } from './lib/services/to-do-items.service';
import { AddToDoComponent } from './lib/components/add-to-do/add-to-do.component';
import { ToDoItemsComponent } from './lib/components/to-do-items/to-do-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    InputTextDirective,
    ButtonDirective,
    AddToDoComponent,
    ToDoItemsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ToDo';

  constructor(private todoItemService: ToDoItemsService) {}

  todoItems = this.todoItemService.getToDoItems();
}
