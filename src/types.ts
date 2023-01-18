export interface TodoItemType {
  todoTitle: string;
  todoContent: string;
  isDone: boolean;
  id: string;
}

export type todoListType = TodoItemType[];
