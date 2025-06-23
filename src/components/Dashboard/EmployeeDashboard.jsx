import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ changeUser, data }) => {
  console.log("EmployeeDashboard data", data);

  return (
    <div className='p-10 bg-[#ICICIC] h-screen'>
      <Header changeUser={changeUser} data={data} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}




export default EmployeeDashboard
