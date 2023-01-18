import styled from "styled-components";
import { TodoList } from ".";
import { useAppSelector } from "hooks";

const TodoContainer = () => {
  const todoList = useAppSelector((state) => state.todoList);

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
