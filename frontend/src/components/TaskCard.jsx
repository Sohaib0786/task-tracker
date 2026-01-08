export default function TaskCard({ task, onToggle, onDelete }) {
    const priorityColors = {
        Low: "bg-green-100 text-green-700",
        Medium: "bg-yellow-100 text-yellow-700",
        High: "bg-red-100 text-red-700",
    };

    const statusColors =
        task.status === "Completed"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-yellow-500 hover:bg-yellow-600";

    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-5 transition-all hover:shadow-lg">
            <div className="flex justify-between items-start gap-4">
                {/* Left Content */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {task.title}
                    </h3>

                    {task.description && (
                        <p className="text-sm text-gray-600">
                            {task.description}
                        </p>
                    )}

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>
                            📅 Due: {task.dueDate.slice(0, 10)}
                        </span>

                        {/* Priority Badge */}
                        <span
                            className={`px-2 py-0.5 rounded-full font-medium ${priorityColors[task.priority]}`}
                        >
                            {task.priority}
                        </span>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex flex-col items-end gap-3">
                    {/* Status Button */}
                    <button
                        onClick={onToggle}
                        className={`px-4 py-1.5 rounded-full text-white text-sm font-medium transition ${statusColors}`}
                    >
                        {task.status}
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={onDelete}
                        className="text-sm text-red-500 hover:text-red-700 transition"
                    >
                        🗑 Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
