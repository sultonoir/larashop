import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Todo } from "@/types";
import { Head } from "@inertiajs/react";
import CreateTodo from "./Partials/CreateTodo";
import TodoValue from "./Partials/TodoValue";

interface Props {
  todos: Todo[];
}

const Page = ({ todos }: Props) => {
  console.log({ todos });
  return (
    <Authenticated>
      <Head title="Todo" />
      <main className="mx-auto max-w-lg">
        <ul className="flex w-full flex-col items-start gap-2">
          {todos.map((todo) => (
            <TodoValue key={todo.id} todo={todo} />
          ))}
        </ul>
        <CreateTodo />
      </main>
    </Authenticated>
  );
};

export default Page;
