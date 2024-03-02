import { TbTrash } from "react-icons/tb";

export function Task() {
  return (
    <div className="bg-Tgray-500 w-full border border-solid border-Tgray-400 p-4 rounded-lg flex items-center justify-between gap-3">
      <button className="min-w-[1.125rem] h-[1.125rem] border-[none]">
        <div className="w-full h-full rounded-[50%] border-2 border-solid border-[#4ea8de]" />
      </button>

      <p className="text-sm text-Tgray-100 mr-auto">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className="border-none text-Tgray-300">
        <TbTrash size={20} />
      </button>
    </div>
  );
}
