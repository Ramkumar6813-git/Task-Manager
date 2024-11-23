import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

const TaskList = ({ onEdit }) => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.length === 0 ? (
        <div className="text-center pt-5 mt-50">
        <h1 className="text-center pt-5 mt-5">No tasks available. Please add a task.</h1>
        </div>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem key={task.id} taskDetails={task} onEdit={onEdit} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;