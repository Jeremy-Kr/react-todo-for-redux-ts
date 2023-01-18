import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Layout;
