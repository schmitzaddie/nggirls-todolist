import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../interfaces/todo-item";

@Component({
  selector: "app-list-manager",
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./list-manager.component.css"]
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    { title: "Grocery Shop" },
    { title: "Car Wash" },
    { title: "Vacuum Living Room" },
    { title: "Dust Dining Room" },
    { title: "Clean Bathroom" },
    { title: "Unload Dishwasher" }
  ];

  constructor() {}

  ngOnInit() {}

  addItem(title: string) {
    this.todoList.push({ title });
  }
}
