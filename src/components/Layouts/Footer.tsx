import styled from "styled-components";
const Footer = () => {
  return <CustomFooter>Copyright &copy; 2022.12.</CustomFooter>;
};

const CustomFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7cac9;
  height: 3rem;
  border-radius: 0.5rem;
`;

export default Footer;
