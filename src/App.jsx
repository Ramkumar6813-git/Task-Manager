import { useState } from "react";
import TaskContextProvider from "./Components/TaskContext";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "./App.css";
// import SortBy from "./Components/SortBy";

const App = () => {
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [editTaskValue, setEditTaskValue] = useState(null)
  const showForm = () => {
    setShowTaskForm(true)
  }

  const closeForm = () => {
    setShowTaskForm(false)
    setEditTaskValue(null)
  }

  const handleEditTask = (taskDetails) => {
    setEditTaskValue(taskDetails)
    setShowTaskForm(true)
  }


  return (
    <TaskContextProvider>    
      <div className="p-4 container-md bg-light bg-info-subtle vh-100 vw-100">
            <div className="d-flex flex-column bg-white rounded-3 p-4  h-100 pt-4 pb-4 p-3">
          <h1 className="text-center mb-4">Task Management</h1>
          <div className="d-flex flex-column">
          {/* <SortBy/> */}
          <button className="btn btn-primary align-self-end mb-3" onClick={showForm}>Add Task</button>
          </div>
          <TaskList onEdit={handleEditTask}/>
        </div>
        {showTaskForm && <TaskForm  closeForm={closeForm} editTaskValue={editTaskValue}/>}
    </div>
    </TaskContextProvider>

  )
}

export default App

