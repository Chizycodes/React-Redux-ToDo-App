import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
