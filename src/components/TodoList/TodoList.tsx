import { TodoItem } from ".";
import styled from "styled-components";
import React from "react";
import { TodoListProps } from "../../types";

const TodoList = ({
  todoItems,
  children,
}: TodoListProps): React.ReactElement => {
  return (
    <ul>
      <CustomH2>{children}</CustomH2>
      {todoItems.map((todoItem) => (
        <TodoItem todoItem={todoItem} key={todoItem.id} />
      ))}
    </ul>
  );
};

const CustomH2 = styled.h2`
  font-size: 2.3rem;
  font-weight: 500;
  text-align: center;
`;

export default TodoList;
