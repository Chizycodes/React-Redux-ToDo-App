import { useState } from "react";
import Button from "./Button";

const AddTask = ({ createTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    createTask(task);
    setTask("");
  };

  return (
    <>
      <form className="addTask" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <Button
          text="Add"
          className={task.trim() === "" ? "add-btn inactive" : "add-btn"}
        />
      </form>
    </>
  );
};

export default AddTask;
