import { useState } from "react";
import { createTask } from "../api/taskApi";

export default function TaskForm({ onAdd }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
    });

    const isValid = form.title.trim() && form.dueDate;

    const submit = async (e) => {
        e.preventDefault();
        const res = await createTask(form);
        onAdd(res.data);
        setForm({ title: "", description: "", priority: "Low", dueDate: "" });
    };

    return (
        <form
            onSubmit={submit}
            className="bg-white rounded-2xl shadow-lg border border-gray-100"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-t-2xl">
                <h2 className="text-xl font-semibold">📝 Create New Task</h2>
                <p className="text-sm text-blue-100">
                    Stay organized and productive
                </p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Task Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter task title"
                        className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={form.title}
                        onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                        }
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        rows="3"
                        placeholder="Optional task details..."
                        className="w-full rounded-lg border px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={form.description}
                        onChange={(e) =>
                            setForm({ ...form, description: e.target.value })
                        }
                    />
                </div>

                {/* Priority & Due Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Priority */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Priority
                        </label>
                        <select
                            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.priority}
                            onChange={(e) =>
                                setForm({ ...form, priority: e.target.value })
                            }
                        >
                            <option value="Low">🟢 Low</option>
                            <option value="Medium">🟡 Medium</option>
                            <option value="High">🔴 High</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Due Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.dueDate}
                            onChange={(e) =>
                                setForm({ ...form, dueDate: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* Validation Hint */}
                {!isValid && (
                    <p className="text-sm text-red-500">
                        Please fill in all required fields.
                    </p>
                )}

                {/* Submit Button */}
                <button
                    disabled={!isValid}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-200
            ${isValid
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                        }
          `}
                >
                    ➕ Add Task
                </button>
            </div>
        </form>
    );
}
