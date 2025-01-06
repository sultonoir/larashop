import { usePage } from "@inertiajs/react";

const TodoLength = () => {
  const length = usePage().props.todos.length;
  return (
    <div className="inline-flex size-5 items-center justify-center rounded-full bg-sky-400 text-xs leading-none text-white">
      {length}
    </div>
  );
};

export default TodoLength;
