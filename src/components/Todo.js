//import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const Todo = ({task, isCompleted, id, toggleTodo}) => {
  return (
    <TransitionGroup
      className={isCompleted ? "todo-task todo-completed" : "todo-task"}
    >
      <CSSTransition key="normal" timeout={500} className="task-text">
        <li className="todo-list" onDoubleClick={toggleTodo}>
          <span className="text">{task}</span>
          <div>
            <span className="edit">
          
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span className="delete">
              
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </li>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Todo
