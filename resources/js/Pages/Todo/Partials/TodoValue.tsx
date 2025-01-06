import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { Todo } from "@/types";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

interface Props {
  todo: Todo;
}

const TodoValue = ({ todo }: Props) => {
  // Gunakan useForm untuk menangani pembaruan status
  const {
    data,
    patch,
    processing,
    recentlySuccessful,
    delete: deleteTodo,
  } = useForm({
    completed: todo.completed, // Inisialisasi dengan status todo saat ini
  });

  const handleComplete = () => {
    // Toggle status completed dan kirim patch request
    patch(route("todos.toggle", todo.id), {
      data: {
        completed: !data.completed, // Toggle status
      },
    });
  };

  const handleDelete = () => {
    // Menangani penghapusan todo
    deleteTodo(route("todos.destroy", todo.id));
  };

  return (
    <li className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <Checkbox
          checked={todo.completed} // Pastikan checkbox mencerminkan status completed
          onChange={handleComplete} // Toggle status ketika checkbox diklik
          className=""
        />
        <p
          className={`inline-flex items-center gap-1 rounded-md border border-transparent bg-zinc-500 px-2.5 py-0.5 text-xs font-semibold text-white transition-colors ${
            todo.completed ? "line-through" : "" // Gunakan data.completed untuk menentukan line-through
          }`}>
          {todo.task}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <PrimaryButton onClick={handleDelete} disabled={processing}>
          Delete Todo
        </PrimaryButton>
        <Transition
          show={recentlySuccessful}
          enter="transition ease-in-out"
          enterFrom="opacity-0"
          leave="transition ease-in-out"
          leaveTo="opacity-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Todo deleted successfully!
          </p>
        </Transition>
      </div>
    </li>
  );
};

export default TodoValue;
