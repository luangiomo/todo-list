import { Task } from "./lib/definitions";

export async function Tasks({ tasks }: { tasks: Task[] }) {
  const taskCompleted = tasks.filter((t) => t.completed == true).length;
  const taskCreated = tasks.length;

  const getConclusionPercentage = (
    completed: number,
    created: number
  ): number => {
    return Math.round((completed / created) * 100);
  };

  return (
    <>
      <div className="flex justify-between bg-gray-50 rounded-md py-[6px] px-2">
        <p className="text-[10px] font-semibold text-gray-600">
          {`${getConclusionPercentage(taskCompleted, taskCreated)}%`}
        </p>
        <p className="text-[10px] font-semibold text-gray-400">
          {`${taskCompleted}/${taskCreated} concluídas`}
        </p>
      </div>
      <div className="flex flex-col gap-[6px] mt-5">
        {tasks.map((t) => (
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
    </>
  );
}
