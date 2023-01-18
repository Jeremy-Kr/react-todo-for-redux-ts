import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/config/configStore";

const TodoDetail = () => {
  const todoList = useSelector((state: RootState) => state.todoList);
  const param = useParams();
  const navigate = useNavigate();

  const todoItem = todoList.find((todo) => todo.id === param.id);
  return (
    <TodoDetailContainer>
      <section>
        <TodoTitle>{todoItem?.isDone ? "🎊 Done 🎊" : "🔥 Todo 🔥"}</TodoTitle>
        <h3>{todoItem?.todoTitle}</h3>
        <CustomHr />
        <span>{todoItem?.todoContent}</span>
        <div>
          <CustomButton
            onClick={() => {
              navigate("/");
            }}
          >
            리스트로 돌아가기
          </CustomButton>
        </div>
        <TodoId>{`id: ${todoItem?.id}`}</TodoId>
      </section>
    </TodoDetailContainer>
  );
};

const TodoDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const CustomHr = styled.hr`
  background-color: #f7cac9;
  height: 1px;
  border: none;
`;

const CustomButton = styled.button`
  background-color: #f7cac9;
  border: none;
  height: 2rem;
  width: 100%;
  border-radius: 0.3rem;
  border: 1px solid #fff;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    border: 1px solid #f7cac9;
    background-color: #fff;
    scale: 1.05;
  }
  margin: 1rem 0;
`;

const TodoTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 500;
  text-align: center;
`;

const TodoId = styled.span`
  color: #aaa;
`;

export default TodoDetail;
