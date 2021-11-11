import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  taskCompleted,
  addTask,
  deleteTask,
  updateTask,
} from "../store/actions/todo";
import AddTask from "./AddTask";
import Todo from "./Todo";
import Button from "./Button";
import { logout } from "../store/actions/auth";
import { useNavigate } from "react-router";

const TodoList = () => {
  const todo = useSelector((state) => ({ ...state.todo }));
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createTask = (newTask) => {
    dispatch(addTask(newTask));
  };

  const update = (id, updatedTask) => {
    dispatch(updateTask({ id, updatedTask }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!auth.isLogged) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <div className="todoDiv">
      <h2>MyToDo</h2>
      <Button text="Logout" className="logout-btn" onClick={handleLogout} />
      <div>
        <AddTask createTask={createTask} updateTask={update} id={todo.id} />

        <ul>
          <TransitionGroup className="todoList">
            {todo.todos &&
              todo.todos.map((todo) => {
                return (
                  <CSSTransition timeout={500} key={todo.id}>
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      task={todo.task}
                      isComplete={todo.isComplete}
                      toggleTodo={() => dispatch(taskCompleted(todo))}
                      deleteTask={() => dispatch(deleteTask(todo))}
                      updateTask={update}
                    />
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
