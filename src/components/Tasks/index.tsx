import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../App";
import { Task } from "../Task";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="w-full max-w-[46rem] mx-auto my-0 mt-[5.625rem] px-4 py-0">
      <header className="flex items-center justify-between mb-[1.5rem]">
        <div className="flex gap-[0.8rem] items-center">
          <p className="text-Tblue text-sm font-bold">Tarefas criadas</p>
          <span className="bg-[#333333] text-Tgray-200 px-[9px] py-[3px] rounded-full text-[0.75rem] font-bold">
            {tasksQuantity}
          </span>
        </div>

        <div className="flex gap-[0.8rem] items-center">
          <p className="text-Tpurple text-sm font-bold">Concluídas</p>
          <span className="bg-[#333333] text-Tgray-200 px-[9px] py-[3px] rounded-full text-[0.75rem] font-bold">
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className="mt-16 flex items-center justify-center flex-col gap-4 text-Tgray-300 text-center">
            <TbClipboardText className="opacity-30" size={50} />
            <div>
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
