import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const storedTasks = localStorage.getItem("tasks");
  const updatedStoredTasks = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasks, setTasks] = useState(updatedStoredTasks);
  const [initialTasks, setInitialTasks] = useState(updatedStoredTasks)

  const addNewTask = (task) => {
    const newTask = { ...task, id: uuidv4()};
    const newTasks = [...tasks, newTask]
    setTasks(newTasks);
    setInitialTasks(newTasks)
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    setInitialTasks(newTasks)
  };

  const updateTask = (updatedTask) => { 
    const newTasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)); 
    setTasks(newTasks); 
    setInitialTasks(newTasks)
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // const sortByDate = (order) => {
  //   const updatedOrder = tasks.sort((task1, task2) => {
  //     if (order === "ASC"){
  //       return new Date(task1.dueDate) - new Date(task2.dueDate)
  //     }else if (order === "DESC"){
  //       return new Date(task2.dueDate) - new Date(task1.dueDate)
  //     }else{
  //       return initialTasks
  //     }
  //   })

  //   setTasks(updatedOrder)
  // }


  return (
    <TaskContext.Provider value={{ tasks, addNewTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
