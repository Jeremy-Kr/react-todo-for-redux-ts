import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, GlobalStyle, Todo, TodoDetail } from "./components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Todo />} />
            <Route path="todo/:id" element={<TodoDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
