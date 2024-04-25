"use client";

import { Task } from "@/app/lib/definitions";
import { PlusIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";

export default function addTask() {
  const buttonStyle =
    "flex items-center gap-1.5 py-1.5 px-2 text-sm rounded-md transition-colors";

  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!text.trim().length) return;

    const newTask: Task = {
      id: Math.random().toString(),
      name: text.trim(),
      completed: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <>
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="Adiconar nova tarefa..."
              className={`${buttonStyle} border border-gray-200 bg-gray-200/20 placeholder:text-gray-400 w-full text-black focus:outline-0`}
            ></textarea>
            <div className="flex justify-end gap-1.5 mt-2">
              <button
                type="reset"
                onClick={() => setAdding(false)}
                className={`${buttonStyle} text-gray-400 hover:text-gray-600`}
              >
                <span>Fechar</span>
              </button>
              <button
                type="submit"
                className={`${buttonStyle} text-sky-900 bg-sky-200 hover:bg-sky-300`}
              >
                <PlusIcon className="w-4 h-4" />
                <span>Adicionar</span>
              </button>
            </div>
          </form>
        </>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className={`${buttonStyle} w-full text-gray-400 hover:text-gray-600`}
        >
          <PlusIcon className="w-4 h-4" />
          <span>Nova Tarefa</span>
        </button>
      )}
      {tasks.map((tasks) => (
        <li key={tasks.id}>{tasks.name}</li>
      ))}
    </>
  );
}
