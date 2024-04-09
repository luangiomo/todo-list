"use client";

import { Suspense, useState } from "react";
import getTasks from "./api/router";

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

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function Tasks({ task }: { task: Task[] }) {
  const taskCompleted = task.filter((t) => t.completed == true).length;
  const taskCreated = task.length;

  const getPercentageOfConclusion = (
    completed: number,
    created: number
  ): number => {
    return Math.round((completed / created) * 100);
  };

  return (
    <>
      <div className="flex justify-between bg-gray-50 rounded-md py-[6px] px-2">
        <p className="text-[10px] font-semibold text-gray-600">
          {`${getPercentageOfConclusion(taskCompleted, taskCreated)}%`}
        </p>
        <p className="text-[10px] font-semibold text-gray-400">
          {`${taskCompleted}/${taskCreated} concluídas`}
        </p>
      </div>
      <div className="flex flex-col gap-[6px] mt-5">
        {task.map((t) => (
          <div
            key={t.id}
            className={`flex gap-3 rounded-md py-[6px] px-2 ${
              t.completed == true
                ? "bg-green-100 hover:bg-green-200"
                : "bg-transparent hover:bg-gray-50"
            }  `}
          >
            <div
              className={`w-4 h-4 rounded-sm ${
                t.completed ? "bg-green-300" : "bg-gray-200"
              }`}
            ></div>
            <p
              className={`text-sm ${
                t.completed ? "text-green-900 line-through" : "text-gray-900"
              }  `}
            >
              {t.name}
            </p>
          </div>
        ))}
      </div>
      <NewTask />
    </>
  );
}

function NewTask() {
  const type = false;

  return (
    <div
      onClick={() => console.log("clicked")}
      className="flex gap-3 rounded-md py-[6px] px-2 border border-transparent hover:border-gray-200"
    >
      <p className="flex gap-2 items-center text-gray-400 text-sm">
        <Icon name={"add"}></Icon> Nova Tarefa
      </p>
    </div>
  );
}

export default async function Home() {
  const task: Task[] = await getTasks();

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="w-full max-w-[360px]">
        <>
          <h1 className="font-medium text-xl text-gray-900 mb-2 tracking-tight">
            Minhas tarefas diarias
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <Tasks task={task} />
          </Suspense>
        </>
      </div>
    </main>
  );
}
