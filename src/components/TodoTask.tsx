import React from "react";
import { ITask } from "../Interfaces";

// Extending interface to include the completeTask function
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task w-[500px] h-12 flex text-white m-[15px]">
      <div className="content flex-[80%] h-full flex justify-center items-center">
        <span className="grid place-items-center border-[1px] border-white w-full h-full text-lg border-r-0 bg-[tomato]">
          {task.taskName}
        </span>
        <span className="grid place-items-center border-[1px] border-white w-full h-full text-lg bg-[tomato]">
          {task.deadLine}
        </span>
      </div>
      <button
        className="flex-[20%] h-full border-none bg-zinc-700 rounded-tr-lg rounded-br-lg text-white cursor-pointer"
        // Pass name of task to the delete function(fetched as prop from parent)
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
