import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadLine: deadline,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      className="flex items-center flex-col w-screen h-screen bg-neutral-800 text-white"
    >
      <div className="header flex-[30%] bg-[tomato] w-full flex justify-center items-center">
        <div className="inputContainer flex flex-col">
          <input
            type="text"
            name="task"
            placeholder="Add a Task"
            value={task}
            onChange={handleChange}
            className="text-gray-300 bg-neutral-800 w-52 h-10 border-none rounded-bl-lg rounded-tl-lg pl-[10px] text-lg border-[1px] border-gray-600"
          />
          <input
            type="number"
            name="deadline"
            placeholder="Set a deadline (in days)"
            value={deadline}
            onChange={handleChange}
            className="text-gray-300  bg-stone-800 w-52 h-10 border-none rounded-bl-lg rounded-tl-lg pl-[10px] text-lg border-[1px] border-gray-600"
          />
        </div>
        <button className="w-16 h-20 border-none rounded-br-lg rounded-tr-lg px-[10px] cursor-pointer bg-neutral-700" onClick={addTask}>Add</button>
      </div>
      <div className="todoList flex-[70%] w-full flex items-center pt-12 flex-col">
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
