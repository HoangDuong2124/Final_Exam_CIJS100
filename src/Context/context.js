import { createContext } from "react";

const Task = createContext({
    tasks: [],
    setTasks: ()=>{},
  });

 export default Task 