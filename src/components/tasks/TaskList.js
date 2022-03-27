import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Task.css"

let filterTasks = {
  Incomplete: task => !task.taskCompleted,
  Completed: task => task.taskCompleted
};
const filterTaskNames = Object.keys(filterTasks);



export const TaskList = () => {
  const { tasks, getTasks } = useContext(TaskContext)
  const [filter, setFilter] = useState('Incomplete');

  const navigate = useNavigate()

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <>
      <div className="tasks">
        <h2>Tasks</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/tasks/create")}>
            Add Task
        </button>
        <div className="task">

            {

                tasks.filter(task => task.taskComplete === false).map(task => 
                   <TaskCard key={task.id} task={task} />)
            }
        </div>
      </div>
    </>
  )
}