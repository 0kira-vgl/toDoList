import { Task } from "../Task";

export function Tasks() {
  return (
    <section className="w-full max-w-[46rem] mx-auto my-0 mt-[5.625rem] px-4 py-0">
      <header className="flex items-center justify-between mb-[1.5rem]">
        <div className="flex gap-[0.8rem] items-center">
          <p className="text-Tblue text-sm font-bold">Tarefas criadas</p>
          <span className="bg-[#333333] text-Tgray-200 px-[9px] py-[3px] rounded-full text-[0.75rem] font-bold">
            18
          </span>
        </div>

        <div className="flex gap-[0.8rem] items-center">
          <p className="text-Tpurple text-sm font-bold">Concluídas</p>
          <span className="bg-[#333333] text-Tgray-200 px-[9px] py-[3px] rounded-full text-[0.75rem] font-bold">
            2 de 10
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        <Task />
        <Task />
      </div>
    </section>
  );
}
