export default async function getTasks() {
  const res = await fetch(
    "http://todolist-aws.sa-east-1.elasticbeanstalk.com/api/tasks",
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Não foi possivel consultar as suas tarefas");
  }

  return res.json();
}
