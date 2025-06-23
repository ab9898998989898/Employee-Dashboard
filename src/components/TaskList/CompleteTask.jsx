import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-[#27f2ee] p-5 rounded-xl overflow-auto task-list'>
        <div className='flex justify-between items-center'>
          <h3 className='text-md bg-red-600 font-semibold px-3 py-1 rounded-md'>{data.category}</h3>
          <h4 className='text-lg truncate max-w-[100px]'>{data.date}</h4>
        </div>
        <h2 className='text-2xl font-bold mt-5 break-words w-full'>{data.title}</h2>
        <p className='text-md mt-2 font-medium break-words w-full'>{data.description}</p>
        <div className='flex justify-between items-center mt-4'>
            <button className='bg-emerald-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-emerald-700 active:bg-emerald-800 cursor-pointer'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
