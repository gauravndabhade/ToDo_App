export interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface ToDoEvent {
  type: string;
  content: TodoItem;
}
