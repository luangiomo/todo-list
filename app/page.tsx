"use client";

import AddTask from "@/app/ui/addTask";
import { Suspense, useState } from "react";
import { Task } from "./lib/definitions";
import { Tasks } from "./tasks";

interface Props {
  name: String;
}

function Icon({ name }: Props) {
  return (
    <span className="material-symbols-outlined text-inherit text-md">
      {name}
    </span>
  );
}

export default function Home() {
  const [task, setTask] = useState<Task[]>([
    {
      id: "0",
      completed: false,
      name: "Nova tarefa",
    },
    {
      id: "1",
      completed: true,
      name: "Lavar a roupa",
    },
    {
      id: "2",
      completed: false,
      name: "Fazer bordado",
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="w-full max-w-96">
        <>
          <h1 className="font-medium text-xl text-gray-900 mb-2 tracking-tight">
            Minhas tarefas diarias
          </h1>
          <Tasks tasks={task} />
          <AddTask />
        </>
      </div>
    </main>
  );
}
