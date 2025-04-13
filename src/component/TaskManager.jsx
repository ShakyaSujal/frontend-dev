"use client";

import { X } from "lucide-react";
import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task item one", completed: false },
    { id: 2, text: "Task Item Two", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="py-12 md:py-16 mx-10 bg-[#f0f0ff]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4532FC]">
            Task Manager
          </h2>
          <p className="mt-2 text-neutral-600">Your daily to do list</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="p-6">
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li key={task.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="h-5 w-5 text-[#4532FC] focus:ring-[#4532FC] 
                     
                      border-neutral-300 rounded"
                    />
                    <span
                      className={`ml-3 text-base ${
                        task.completed
                          ? "line-through text-neutral-400"
                          : "text-neutral-800"
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-4 py-1 text-sm text-red-500 hover:text-red-700 border border-red-200 rounded-md flex items-center justify-between gap-2 font-semibold"
                  >
                    <X className="h-4 w-4" />
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6 pb-6">
            <div className="flex flex-row sm:flex-col  gap-3">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add new task"
                className="block w-full rounded-xl border border-gray-500 py-2 px-3 text-neutral-900 shadow-sm placeholder:text-neutral-400 sm:text-sm"
              />
              <button
                onClick={addTask}
                className="mt-2 sm:mt-0 w-2/5 sm:w-2/5 inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full text-white bg-[#4532FC] hover:bg-[#3a2ad9]"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
