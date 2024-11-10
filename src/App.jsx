import { useState } from "react";
import "./App.css";
import All from "./Components/All/All";
import Active from "./Components/Active/Active";
import Completed from "./Components/Completed/Completed";
import { taskData } from "./data";
import Task from "./Context/context";
function App() {
   
  const [tasks, setTasks] = useState(taskData);
  const [tab, setTab] = useState(["All", "Active", "Completed"]);
  const [clickTab, setClickTab] = useState(0);
  return (
    <Task.Provider value = {{tasks,setTasks}}>
      <div className="w-screen p-5 ">
        <div className="header w-full h-20 text-[#000] text-4xl font-medium text-center">
          #todo
        </div>
        <div className="menu w-full px-4 flex justify-between items-center border-b-slate-400 border-b-[1px]">
          {tab.map((tab, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => setClickTab(index)}
                  className="w-24 border-none bg-none border-b-blue-700 border-b-2"
                >
                  <p
                    className={
                      clickTab === index
                        ? "text-lg font-medium border-b-blue-700 border-b-2"
                        : "text-lg font-medium"
                    }
                  >
                    {tab}
                  </p>
                </button>
              </div>
            );
          })}
        </div>

        <div className="content w-full mt-8 ">
          {clickTab == 0 ? (
            <All />
          ) : clickTab === 1 ? (
            <Active />
          ) : clickTab === 2 ? (
            <Completed />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Task.Provider>
  );
}

export default App;
