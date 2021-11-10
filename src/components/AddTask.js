import { useState } from "react";
import Button from "./Button";

const AddTask = () => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {

  }

  return (
      <form className="addTask" onsubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <Button
        text="Add"
        className="add-btn" 
        />
      </form>
  );
};

export default AddTask;
