import styled from "styled-components";
import { TodoList } from ".";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/configStore";

export interface TodoItemType {
  todoTitle: string;
  todoContent: string;
  isDone: boolean;
  id: string;
}

export type todoListType = TodoItemType[];

const TodoContainer = () => {
  const todoList = useSelector((state: RootState) => state.todoList);

  const todoItems = todoList.filter((item) => !item.isDone);
  const doneItems = todoList.filter((item) => item.isDone);

  return (
    <TodoFlexBox>
      <TodoList todoItems={todoItems}>🔥 Todo 🔥</TodoList>
      <TodoList todoItems={doneItems}>🎊 Done 🎊</TodoList>
    </TodoFlexBox>
  );
};

const TodoFlexBox = styled.article`
  display: flex;
  justify-content: space-around;
`;

export default TodoContainer;
