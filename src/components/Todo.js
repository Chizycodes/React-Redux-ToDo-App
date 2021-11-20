//import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "./Button";

const Todo = ({
  myTask,
  isComplete,
  toggleTodo,
  deleteTask,
  updateTask,
  id,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState(myTask);

  const handleSave = (e) => {
    e.preventDefault();
    updateTask(id, editTodo);
    setIsEditing(false);
  };

  return (
    <TransitionGroup
      className={isComplete ? "todo-list todo-completed" : "todo-list"}
    >
      <CSSTransition key="normal" timeout={500} className="task-text">
        <li className="task-li" onDoubleClick={toggleTodo}>
          {isEditing ? (
            <form className="editTask" onSubmit={handleSave}>
              <input
                type="text"
                name="editTodo"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
              <Button text="Save" className="save-btn" />
            </form>
          ) : (
            <div className="text">{myTask}</div>
          )}
          <div className="icons-div">
            <span className="edit" onClick={() => setIsEditing(true)}>
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
};

export default Todo;
