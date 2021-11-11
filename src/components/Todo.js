//import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const Todo = ({task, isComplete, id, toggleTodo, deleteTask, updateTask}) => {



  return (
    <TransitionGroup
      className={isComplete ? "todo-list todo-completed" : "todo-list"}
    >
      <CSSTransition key="normal" timeout={500} className="task-text">
        <li className="task-li" onDoubleClick={toggleTodo}>
          <span className="text">{task}</span>
          <div>
            <span className="edit" onClick={updateTask}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span className="delete" onClick={deleteTask}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </li>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Todo
