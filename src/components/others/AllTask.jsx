import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  console.log(authData.employees);
  
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60">
      <div className="bg-gray-900 text-800 text-center mb-2 py-2 px-4 rounded flex flex-col sm:flex-row justify-center items-center gap-1">
          <h3 className="text-sm sm:text-base w-full py-1 sm:w-1/5 bg-cyan-600 text-center font-bold">Name</h3>
          <h3 className="text-sm sm:text-base w-full py-1 sm:w-1/5 bg-emerald-600 text-center font-bold">New</h3>
          <h3 className="text-sm sm:text-base w-full py-1 sm:w-1/5 bg-green-600 text-center font-bold">Completed</h3>
          <h3 className="text-sm sm:text-base w-full py-1 sm:w-1/5 bg-red-600 text-center font-bold">Failed</h3>
          <h3 className="text-sm sm:text-base w-full py-1 sm:w-1/5 bg-blue-600 text-center font-bold">Active</h3>
        </div>
      <div className='h-[80%] overflow-auto hide-scrollbar'>
        {authData.employees.map((e,idx) => {
        return <div key={idx} className="bg-gray-900 mb-2 py-2 px-4 rounded flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
          <h2 className="text-sm sm:text-base py-1 bg-cyan-600 w-full sm:w-1/5 text-center text-[#E0F2F1] font-semibold">{e.name}</h2>
          <h5 className="text-sm sm:text-base py-1 bg-emerald-600 w-full sm:w-1/5 text-center text-[#E0F2F1] font-semibold">{e.taskCount.newTask}</h5>
          <h5 className="text-sm sm:text-base py-1 bg-green-600 w-full sm:w-1/5 text-center text-[#E0F2F1] font-semibold">{e.taskCount.completedTask}</h5>
          <h5 className="text-sm sm:text-base py-1 bg-red-600 w-full sm:w-1/5 text-center text-[#E0F2F1] font-semibold">{e.taskCount.failed}</h5>
          <h3 className="text-sm sm:text-base py-1 w-full bg-blue-600 sm:w-1/5 text-center text-[#E0F2F1] font-semibold">{e.taskCount.active}</h3>
        </div>;
      })}
      </div>
    </div>
  )
}

export default AllTask
