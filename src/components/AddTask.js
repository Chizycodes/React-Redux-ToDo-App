import { useState } from "react";
import Button from "./Button";

const AddTask = ({ createTask, updateTask, id, updatedTask}) => {
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState(task);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask(id, updatedTask);
    setIsEditing(false);
    setEditTodo("");
  };

  return (
    <form className="addTask" onSubmit={isEditing ? handleUpdate : handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        name="task"
        value={isEditing? editTodo : task}
        onChange={(e) => setTask(e.target.value)}
        required
      />

      {isEditing ? (
        <Button text="Save" className="save-btn" />
      ) : (
        <Button text="Add" className="add-btn" />
      )}
    </form>
  );
};

export default AddTask;
