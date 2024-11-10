import React, { useContext } from "react";
import Task from "../../Context/context";

const Completed = () => {
  const Tasks = useContext(Task);
  const taskCompleted = Tasks.tasks.filter((prev) => prev.active === false);
  const handleDelete = (id) => {
      const update = Tasks.tasks.filter((prev) => prev.id !== id);
      Tasks.setTasks(update);
  };
  const handleDeleteAll =()=>{
    const update = Tasks.tasks.filter((prev) => prev.active !== false);
    Tasks.setTasks(update);
  }
  return (
    <div>
      {taskCompleted.map((prev) => {
        return (
          <div
            key={prev.id}
            className="w-full flex justify-between items-center"
          >
            <div className=" flex items-center justify-start gap-3">
              <button className="w-5 h-5 flex items-center justify-center rounded-sm bg-blue-500 border-[1px] border-slate-400">
                <i className="text-[#FFFFFF] fa-solid fa-check"></i>
              </button>
              <div className="font-medium line-through opacity-60">
                {prev.name}
              </div>
            </div>

            <div>
              <button onClick={() => handleDelete(prev.id)}>
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        );
      })}

      <div className="text-right">
        <button onClick={()=>handleDeleteAll()} className="w-20 h-8 mt-4   rounded bg-red-600 text-sm text-[#FFFFFF]">
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Completed;
