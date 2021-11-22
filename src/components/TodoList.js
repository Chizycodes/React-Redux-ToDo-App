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

  const update = (id, updatedTodo) => {
    dispatch(updateTask({ id, updatedTodo }));
  };

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout());
    }, 3000)
    
  };
  useEffect(() => {
    if (!auth.isLogged) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <div className="todoDiv">
      <div className="header">
        <h2>MyToDo</h2>
        <Button text="Logout" className="logout-btn" onClick={handleLogout} />
      </div>

      <div className="add-task">
        <p>*Double click to mark task as done</p>
        <AddTask createTask={createTask} />

        <ul>
          <TransitionGroup className="todoList">
            {todo.todos &&
              todo.todos.map((todo) => {
                return (
                  <CSSTransition timeout={500} key={todo.id}>
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      myTask={todo.task}
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
