import { TodoItemType } from "types";
import { v4 as uuidv4 } from "uuid";

// Action Value

enum ActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
}

interface updateTodoItemType {
  todoTitle: string;
  todoContent: string;
  id: string;
}

interface AddTodoAction {
  type: ActionType.ADD_TODO;
  newTodoItem: TodoItemType;
}

interface DeleteTodoAction {
  type: ActionType.DELETE_TODO;
  todoItemId: string;
}

interface ToggleTodoAction {
  type: ActionType.TOGGLE_TODO;
  todoItemId: string;
}

interface UpdateTodoAction {
  type: ActionType.UPDATE_TODO;
  updateTodoItem: updateTodoItemType;
}

type TodoListAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction
  | UpdateTodoAction;

// Action Creator
export const addTodo = (newTodoItem: TodoItemType) => {
  return {
    type: ActionType.ADD_TODO,
    newTodoItem,
  };
};

export const deleteTodo = (todoItemId: string) => {
  return {
    type: ActionType.DELETE_TODO,
    todoItemId,
  };
};

export const toggleTodo = (todoItemId: string) => {
  return {
    type: ActionType.TOGGLE_TODO,
    todoItemId,
  };
};

export const updateTodo = (updateTodoItem: updateTodoItemType) => {
  return {
    type: ActionType.UPDATE_TODO,
    updateTodoItem,
  };
};

// init
const initialState = [
  {
    todoTitle: "TodoList 만들기",
    todoContent: "투두리스트 리액트로 만들기",
    isDone: true,
    id: uuidv4(),
  },
  {
    todoTitle: "TodoList 리팩토링하기",
    todoContent: "투두리스트 리덕스로 상태관리 하기",
    isDone: true,
    id: uuidv4(),
  },
  {
    todoTitle: "TodoList 리팩토링하기",
    todoContent: "투두 아이템 수정 기능 만들기",
    isDone: true,
    id: uuidv4(),
  },
  {
    todoTitle: "TodoList 문서작업하기",
    todoContent: "Readme 작성하기",
    isDone: false,
    id: uuidv4(),
  },
];

// Reducer
const todoList = (state = initialState, action: TodoListAction) => {
  const prevState = [...state];

  switch (action.type) {
    case ActionType.ADD_TODO:
      return [...state, action.newTodoItem];

    case ActionType.DELETE_TODO:
      const newTodoList = state.filter((item) => item.id !== action.todoItemId);
      return newTodoList;

    case ActionType.TOGGLE_TODO:
      prevState.forEach((item) => {
        if (item.id === action.todoItemId) {
          return (item.isDone = !item.isDone);
        }
      });
      return prevState;

    case ActionType.UPDATE_TODO:
      const { todoTitle, todoContent, id } = action.updateTodoItem;
      prevState.forEach((item) => {
        if (item.id === id) {
          item.todoTitle = todoTitle;
          item.todoContent = todoContent;
          return;
        }
      });

      return prevState;

    default:
      return state;
  }
};

//export default
export default todoList;
