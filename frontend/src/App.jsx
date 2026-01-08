import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks, updateTask, deleteTask } from "./api/taskApi";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res.data));
  }, []);

  const toggleStatus = async (task) => {
    const res = await updateTask(task._id, {
      status: task.status === "Pending" ? "Completed" : "Pending",
    });
    setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-3xl mx-auto space-y-6">
      <TaskForm onAdd={(t) => setTasks([t, ...tasks])} />
      <TaskList tasks={tasks} onToggle={toggleStatus} onDelete={removeTask} />
    </div>
  );
}
