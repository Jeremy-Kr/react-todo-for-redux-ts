import styled from "styled-components";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/modules/todoList";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const dispatch = useDispatch();
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);

  const handleTodoTitleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTodoTitle(event.target.value);
  };

  const handleTodoContentOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTodoContent(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    if (!todoTitle && !todoContent) {
      event.preventDefault();
      if (titleInputRef.current) {
        titleInputRef.current.focus();
      }
      return alert("뭐라도 좀 쓰쇼");
    }
    if (!todoTitle) {
      event.preventDefault();
      if (titleInputRef.current) {
        titleInputRef.current.focus();
      }
      return alert("제목 좀 쓰쇼");
    }
    if (!todoContent) {
      event.preventDefault();
      console.log(contentInputRef);
      if (contentInputRef.current) {
        contentInputRef.current.focus();
      }
      return alert("내용도 좀 쓰쇼");
    }
    event.preventDefault();

    const newTodoItem = {
      todoTitle,
      todoContent,
      isDone: false,
      id: uuidv4(),
    };

    dispatch(addTodo(newTodoItem));
    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <TodoInputContainer
      onSubmit={(event) => {
        onSubmitHandler(event);
      }}
      className="todo"
    >
      <label htmlFor="todo-title">제목</label>
      <TodoInputBox
        value={todoTitle}
        id="todo-title"
        placeholder="제목을 입력 해 주세요. (최대 22자)"
        onChange={(event) => {
          handleTodoTitleOnChange(event);
        }}
        maxLength={22}
        ref={titleInputRef}
      />
      <label htmlFor="todo-content">내용</label>
      <TodoInputBox
        value={todoContent}
        id="todo-content"
        placeholder="할 일을 입력 해 주세요. (최대 35자)"
        onChange={(event) => {
          handleTodoContentOnChange(event);
        }}
        maxLength={35}
        ref={contentInputRef}
      />
      <TodoSubmitButton type="submit"> 추가하기 </TodoSubmitButton>
    </TodoInputContainer>
  );
};

const TodoInputContainer = styled.form`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-anchor: 50%;
  color: #2e050a;
`;

const TodoInputBox = styled.input`
  width: 20rem;
  height: 2rem;
  margin: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #2e050a;
  padding: 0 1rem;
  color: #2e050a;
  &:focus {
    outline-color: #f7cac9;
  }
`;

const TodoSubmitButton = styled.button`
  background-color: #f7cac9;
  color: #2e050a;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  border: 1px solid #fff;
  transition: 0.3s;
  height: 2.4rem;
  &:hover {
    cursor: pointer;
    border: 1px solid #f7cac9;
    background-color: #fff;
    scale: 1.03;
  }
`;

export default TodoInput;
