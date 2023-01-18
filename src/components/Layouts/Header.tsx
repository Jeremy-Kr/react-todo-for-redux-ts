import styled from "styled-components";

const Header = () => {
  return (
    <StickyContainer>
      <FlexHeader>
        <span>My Todo List</span>
        <span>React</span>
      </FlexHeader>
    </StickyContainer>
  );
};

const StickyContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const FlexHeader = styled.div`
  margin: 0.6rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  background-color: #f7cac9;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #2e050a;
`;

export default Header;
