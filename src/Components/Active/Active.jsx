import React, { useState, useContext } from "react";
import Task from "../../Context/context";
const Active = () => {
  const Tasks = useContext(Task);
  const taskActive = Tasks.tasks.filter((prev) => prev.active === true);
  const init = {
    id: Math.random(),
    name: "",
    active: true,
  };
  const [addTask, setAddTask] = useState(init);
  const handleAdd = () => {
    Tasks.setTasks((prev) => [...prev, addTask]);
    setAddTask({...init,id:Math.random()})
  };
  const handleActive = (id) => {
    const update = Tasks.tasks.map((prev) => {
      return prev.id === id ? { ...prev, active: false } : prev;
    });
    Tasks.setTasks(update);
  };
  return (
    <div>
      <div className="w-full mb-5 flex justify-between items-center">
        <input
          onChange={(e) => {
            setAddTask({ ...addTask, name: e.target.value });
          }}
          value={addTask.name}
          type="text"
          className="w-[80%] h-10 p-3 rounded-lg border-[1px] border-slate-400 outline-none"
          placeholder="Add details"
        />
        <button
          onClick={handleAdd}
          className="w-16 h-10 bg-blue-600 rounded-lg text-sm text-[#FFFFFF]"
        >
          Add
        </button>
      </div>

      {taskActive.map((prev) => {
        return (
          <div
            key={prev.id}
            className="w-full mb-2 flex items-center justify-start gap-3"
          >
            <button
              onClick={() => handleActive(prev.id)}
              className="w-5 h-5 rounded-sm border-[1px] border-slate-400"
            ></button>
            <div className="font-medium">{prev.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Active;
