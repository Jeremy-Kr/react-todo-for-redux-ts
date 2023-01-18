export interface TodoItemType {
  todoTitle: string;
  todoContent: string;
  isDone: boolean;
  id: string;
}

export type todoListType = TodoItemType[];

export interface TodoItemProps {
  todoItem: TodoItemType;
}

export interface TodoContentInputType {
  valueLength: number;
}

export interface CustomButtonType {
  isDone?: boolean;
  buttonColor?: string;
}

export interface TodoListProps {
  todoItems: todoListType;
  children: React.ReactNode;
}
