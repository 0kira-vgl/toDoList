import Logo from "../../assets/toDoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header() {
  return (
    <header className="bg-[#0d0d0d] flex items-center justify-center h-[12.5rem] relative">
      <img src={Logo} alt="Logo do ToDo App" />

      <form className="absolute h-[3.375rem] bottom-[calc(-3.375rem_/_2)] w-full max-w-[46rem] flex gap-2 px-4 py-0">
        <input
          className="placeholder:text-[#808080] h-full text-lg flex-1 text-[#f2f2f2] bg-[#262626] border border-solid border-[#0d0d0d] px-4 py-0 rounded-lg"
          placeholder="Adicione uma nova tarefa"
        />
        <button className="h-full gap-1 font-bold text-sm px-4 py-0 bg-[#1e6f9f] text-[#f2f2f2] border-none rounded-lg flex items-center">
          Criar
          <AiOutlinePlusCircle className="font-bold" size={20} />
        </button>
      </form>
    </header>
  );
}
