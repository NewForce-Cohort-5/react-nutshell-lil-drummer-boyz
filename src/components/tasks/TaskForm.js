import React, { useContext, useEffect, useState } from "react";
import "./Task.css";
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from "./TaskProvider";


export const TaskForm = () => {
  const { addTask, getTaskById, updateTask } = useContext(TaskContext)

  const [task, setTask] = useState({

            id:0,
            userId: 0,
            name: "",
            completeDate: "",
            taskComplete: false
  })

  const [isLoading, setIsLoading] = useState(true);

  const {taskId} = useParams();
  const navigate = useNavigate();

  const handleControlledInputChange = (event) => {

    const newTask = { ...task }

    newTask[event.target.id] = event.target.value

    setTask(newTask)
  }

  const handleSaveTask = () => {

      setIsLoading(true);
      if (taskId) {

        updateTask({
            id: task.id,
            userId: parseInt(localStorage.getItem("nutshell_user")),
            name: task.name,
            completeDate: task.completeDate,
            taskComplete: false
        })
        .then(() => navigate("/tasks"))
      }else {

        addTask({
            id: parseInt(task.id),
            name: task.name,
            completeDate: task.completeDate,
            taskComplete: false,
            userId: parseInt(localStorage.getItem("nutshell_user"))

        })
        .then(() => navigate("/tasks"))
      }
    }

  useEffect(() => {
      if (taskId){
        getTaskById(taskId)
        .then(task => {
            setTask(task)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
  }, [])

  return (
    <form className="taskForm">
      <fieldset>
        <div className="form-group">
          <input type="text" id="name" className="form-control"
          placeholder="Task:"
          onChange={handleControlledInputChange}
          defaultValue={task.name}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="completeDate">Completion Date: </label>
          <input type="date" id="completeDate" name="date" required className="form-control"
          onChange={handleControlledInputChange}
          defaultValue={task.completeDate}/>
        </div>
      </fieldset>
      <button className="btn btn-secondary"
        // disabled={isLoading}
        onClick={event => {
          event.preventDefault() // Prevent browser from submitting the form and refreshing the page
          handleSaveTask()
        }}>
        {taskId ? <>Save Task</> : <>Add Task</>}
      </button>
    </form>
  )
}