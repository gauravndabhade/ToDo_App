import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoItem } from "src/interfaces/todo-item";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  public get(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(
      environment.base_url_todo_server + `/api/todos/`
    );
  }

  public add(todoItem: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(
      environment.base_url_todo_server + `/api/todos/`,
      todoItem
    );
  }

  public update(todoItem: TodoItem) {
    return this.httpClient.patch(
      environment.base_url_todo_server + `/api/todos/${todoItem.id}/`,
      todoItem
    );
  }

  public delete(todoID: string) {
    return this.httpClient.delete(
      environment.base_url_todo_server + `/api/todos/${todoID}/`
    );
  }
}
