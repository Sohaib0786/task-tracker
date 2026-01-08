import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <section className="bg-gray-50 rounded-2xl p-6 shadow-inner">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    📋 Your Tasks
                </h2>
                <span className="text-sm text-gray-500">
                    {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
                </span>
            </div>

            {/* Empty State */}
            {tasks.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">
                        No tasks yet 🚀
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                        Add your first task to get started
                    </p>
                </div>
            ) : (
                /* Task Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task._id}
                            task={task}
                            onToggle={() => onToggle(task)}
                            onDelete={() => onDelete(task._id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
