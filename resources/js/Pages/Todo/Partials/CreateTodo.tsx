import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function CreateTodo() {
  // Menggunakan useForm untuk state form
  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      task: "", // Data task yang diinginkan untuk Todo
    });

  // Fungsi untuk mereset form setelah todo berhasil dibuat
  const resetForm = () => {
    setData({
      task: "", // Mengatur ulang nilai task ke string kosong
    });
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("todos.store"), {
      data: {
        // task: 0,
        csrf: document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute("content"),
      },
      onSuccess: () => {
        // Reset form setelah sukses
        resetForm();
      },
    });
  };

  return (
    <section>
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Create New Todo
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Create a new todo by filling in the task information below.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div>
          <InputLabel htmlFor="task" value="Task" />
          <TextInput
            id="task"
            className="mt-1 block w-full"
            value={data.task}
            onChange={(e) => setData("task", e.target.value)}
            required
            autoComplete="off"
          />

          <InputError className="mt-2" message={errors.task} />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Create Todo</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Todo created successfully!
            </p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
