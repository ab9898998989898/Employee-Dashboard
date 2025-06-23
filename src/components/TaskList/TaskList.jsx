import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log("TaskList data:", data?.tasks); // Debug logging
  
  return (
    <div className='h-[55%] text-white flex items-center overflow-x-scroll justify-start gap-5 flex-nowrap mt-10 py-5 w-full task-list'>
      {data.tasks.map((task, index) => {
        // Check if task is new but not completed or failed
        if(task.active && !task.newTask && !task.completedTask && !task.failed) {
          return <AcceptTask key={index} data={task} />
        }
        if(task.newTask && !task.completedTask && !task.failed) {
          return <NewTask key={index} data={task} />
        }
        // Check if task is active but not new, completed, or failed
        if(task.completedTask) {
          return <CompleteTask key={index} data={task} />
        }
        if(task.failed) {
          return <FailedTask key={index} data={task} />
        }
        return null; // Handle any tasks that don't match conditions
      })}
    </div>
  )
}

export default TaskList
