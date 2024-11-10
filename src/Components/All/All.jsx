import React, { useContext, useEffect, useState } from "react";
import Task from "../../Context/context";
const All = () => {
  const taskAll = useContext(Task);
  const [addTask, setAddTask] = useState({
    id: taskAll.tasks.length + 1,
    name: "",
    active: true,
  });
  const handleAdd = () => {
    taskAll.setTasks((prev) => [...prev, addTask]);
  };

 const handleActive = (id) => {
   const update =   taskAll.tasks.map(prev=>{
      return   prev.id === id ? {...prev,active:false} : prev
      })
      taskAll.setTasks(update)
  };
  return (
    <div>
      <div className="w-full mb-5 flex justify-between items-center">
        <input
          onChange={(e) => {
            setAddTask({ ...addTask, name: e.target.value });
          }}
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
      {taskAll.tasks.map((tash) => {
        return (
          <>
            {tash.active===true ? (
              <div
                key={tash.id}
                className="w-full mb-2 flex items-center justify-start gap-3"
              >
                <button
                  onClick={()=>handleActive(tash.id)}
                  className="w-5 h-5 rounded-sm border-[1px] border-slate-400"
                ></button>
                <div className="font-medium">{tash.name}</div>
              </div>
            ) : (
              <div
                key={tash.id}
                className="w-full flex items-center justify-start gap-3"
              >
                <button className="w-5 h-5 flex items-center justify-center rounded-sm bg-blue-500 border-[1px] border-slate-400">
                  <i className="text-[#FFFFFF] fa-solid fa-check"></i>
                </button>
                <div className="font-medium line-through opacity-60">
                  {tash.name}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default All;
