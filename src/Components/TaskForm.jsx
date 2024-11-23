import { useContext, useEffect, useState } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = ({editTaskValue, closeForm}) => {
  const { addNewTask, updateTask } = useContext(TaskContext);
  const [task,setTask] = useState({
    taskName: "",
    status: "Pending",
    dueDate: ""
  })

  useEffect(()=>{
    if (editTaskValue){
      setTask(editTaskValue)
    }
  }, [editTaskValue])



  const handleFormSubmit = (e) => { 
    e.preventDefault(); 
    if (editTaskValue) {
       updateTask(task); 
    } else {
       addNewTask(task); 
    } 
    closeForm(); };

  const handleChange = (e)=>{
    const {name, value} = e.target
    setTask({...task,[name]: value})
  }

  const onClickCloseForm = () => {
    closeForm();
  };

  return (
    <div className='form-overlay'>
      <form className='form' onSubmit={handleFormSubmit}>
        <h1 className='text-center form-heading '>Form Details</h1>
        <div className='mb-2 mt-2 d-flex align-items-center'>
          <label className='form-label mt-2 me-3'>Task: </label>
          <input type="text" className='form-control' name="taskName" value={task.taskName} placeholder="Enter task" onChange={handleChange} required />
        </div>
        <div className="form-group d-flex"> 
          <label htmlFor='select' className='mt-2 me-2'>Status: </label>
          <select className='form-control' name="status" id="select" value={task.status} onChange={handleChange} required> 
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className='d-flex align-items-center mb-2 mt-3'>
          <label className='form-label'>DueDate: </label>
          <input type="date"className='form-control' name="dueDate" value={task.dueDate} onChange={handleChange} required />
        </div>
        <div className='float-end mt-4'>
          <button className='btn btn-danger me-3' type="button" onClick={onClickCloseForm}>Cancel</button>
          <button type="submit" className='btn btn-primary'>{editTaskValue ? "Update Task" : "Add task"}</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;

