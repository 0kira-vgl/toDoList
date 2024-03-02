import { ITask } from "../../App";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className="bg-Tgray-500 w-full border border-solid border-Tgray-400 p-4 rounded-lg flex items-center justify-between gap-3">
      <button
        onClick={() => onComplete(task.id)}
        className="min-w-[1.125rem] h-[1.125rem] border-[none]"
      >
        {task.isCompleted ? (
          <BsFillCheckCircleFill className="w-full h-full text-Tpurple" />
        ) : (
          <div className="w-full h-full rounded-[50%] border-2 border-solid border-Tblue" />
        )}
      </button>

      <p
        className={
          task.isCompleted
            ? "text-Tgray-300 line-through mr-auto text-sm duration-75"
            : "text-sm text-Tgray-100 mr-auto"
        }
      >
        {task.title}
      </p>

      <button
        onClick={() => onDelete(task.id)}
        className="border-none text-Tgray-300"
      >
        <TbTrash className="hover:text-[#FF4136] duration-100" size={20} />
      </button>
    </div>
  );
}
