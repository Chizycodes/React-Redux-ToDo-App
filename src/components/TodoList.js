//import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useSelector, useDispatch} from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { taskCompleted } from "../store/actions/todo";
import AddTask from "./AddTask";
import Todo from "./Todo";

const TodoList = () => {
    const todo = useSelector((state) => ({...state.todo}));
    const dispatch = useDispatch();
    console.log(todo);
    return (
      <div className="todoDiv">
        <h3>MyToDo</h3>
        <div>
          <AddTask />

          <ul className="todoList">
            {todo.todos &&
              todo.todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.isComplete}
                    toggleTodo={() => dispatch(taskCompleted(todo))}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    );
}

export default TodoList
