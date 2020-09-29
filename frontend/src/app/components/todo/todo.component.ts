import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/services/todo.service";
import { TodoItem } from "src/interfaces/todo-item";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoItemComponent implements OnInit {
  newTodo: TodoItem;
  todos: TodoItem[];

  constructor(private todoService: TodoService) {
    this.newTodo = {
      id: null,
      title: "",
      description: "",
      completed: false
    };
    this.todos = [];
  }

  ngOnInit(): void {
    console.log("called!");
    this.refreshTodoList();
  }

  addTodo(event) {
    event.preventDefault();
    this.todoService.add(this.newTodo).subscribe(
      data => {
        this.refreshTodoList();
      },
      error => {
        console.log("Error :", error);
      }
    );
  }

  deleteTodo(todo: TodoItem) {
    console.log(todo);
    this.todoService.delete(todo.id).subscribe(
      data => {
        this.refreshTodoList();
      },
      error => {
        console.log("Error :", error);
      }
    );
  }

  updateTodo(todo: TodoItem) {
    console.log(todo);
    this.todoService.update(todo).subscribe(
      data => {
        this.refreshTodoList();
      },
      error => {
        console.log("Error :", error);
      }
    );
    this.refreshTodoList();
  }

  refreshTodoList() {
    this.todoService.get().subscribe(
      data => {
        this.todos = data;
      },
      error => {
        console.log("Error :", error);
      }
    );
  }
}
