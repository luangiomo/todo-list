export default async function getTasks() {
  const res = await fetch(
    "http://todolist-aws.sa-east-1.elasticbeanstalk.com/api/tasks"
  );

  if (!res.ok) {
    throw new Error("Não foi possivel consultar as suas tarefas");
  }

  return res.json();
}
