import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import "./Task.css"

export const TaskCard = ({task}) => {
    const { getTasks, completeTask } = useContext(TaskContext)

  const navigate = useNavigate();

    const handleCheckbox = (event) => {
        event.preventDefault();
        completeTask(task.id).then(getTasks)
      }    
      if (task.userId === parseInt(localStorage.getItem("nutshell_user"))) {
   return (
<section className="task">
    <div className="task__name">{task.name}</div>
    <div className="task__complete">{task.completeDate}</div>
    <button className="btn btn-secondary" onClick={() => {
    navigate(`/tasks/edit/${task.id}`)
}}>Edit</button>
    <div><label htmlFor="complete">Check when complete: </label>
    <input className="taskComplete" type ="checkbox"  onChange={handleCheckbox}/></div>
    </section>
   )
   }
  else { 
    return (
     "" 
    )
  }}