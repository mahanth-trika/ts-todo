import React, { ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = () => {
    const newTask = {
      taskName: task,
      deadLine: deadline,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Add a Task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Set a deadline (in days)"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
