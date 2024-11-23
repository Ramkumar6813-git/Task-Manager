import { useContext } from "react"
import { TaskContext } from "./TaskContext"

const TaskItem = ({taskDetails,onEdit}) => {
  const {deleteTask} = useContext(TaskContext)
  const {id, taskName, status, dueDate} = taskDetails

  const onClickDeleteTask = () =>{
    deleteTask(id)
  }
  
  return (
  <tr>
    <td>{taskName}</td>
    <td>{status}</td>
    <td>{dueDate}</td>
    <td className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
      <button className="btn btn-warning me-md-3 mb-1 mb-md-0" onClick={()=>{onEdit(taskDetails)}}>Edit</button>
      <button className="btn btn-danger" onClick={onClickDeleteTask}>Delete</button>
    </td>
  </tr>
  )
}

export default TaskItem