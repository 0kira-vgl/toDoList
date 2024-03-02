import { ChangeEvent, FormEvent, useState } from "react";
import Logo from "../../assets/toDoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className="bg-Tgray-700 flex items-center justify-center h-[12.5rem] relative">
      <img src={Logo} alt="Logo do ToDo App" />

      <form
        onSubmit={handleSubmit}
        className="absolute h-[3.375rem] bottom-[calc(-3.375rem_/_2)] w-full max-w-[46rem] flex gap-2 px-4 py-0"
      >
        <input
          required
          onChange={onChangeTitle}
          value={title}
          placeholder="Adicione uma nova tarefa"
          className="placeholder:text-Tgray-300 h-full text-lg flex-1 text-Tgray-100 bg-Tgray-500 border border-solid border-Tgray-700 px-4 py-0 rounded-lg"
        />
        <button className="h-full gap-1 font-bold text-sm px-4 py-0 bg-Tblue-dark text-Tgray-100 border-none rounded-lg flex items-center">
          Criar
          <AiOutlinePlusCircle className="font-bold" size={20} />
        </button>
      </form>
    </header>
  );
}
