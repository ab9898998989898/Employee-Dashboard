import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-[#a843ef] p-5 rounded-xl overflow-auto task-list'>
        <div className='flex justify-between items-center'>
          <h3 className='text-md bg-red-600 font-semibold px-3 py-1 rounded-md'>{data.category}</h3>
          <h4 className='text-lg truncate max-w-[100px]'>{data.date}</h4>
        </div>
        <h2 className='text-2xl font-bold mt-5 break-words w-full'>{data.title}</h2>
        <p className='text-md mt-2 font-medium break-words w-full'>{data.description}</p>
        <div className='flex justify-between items-center mt-4'>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 active:bg-green-700 cursor-pointer'>
                Completed
            </button>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4 ml-2 hover:bg-red-600 active:bg-red-700 cursor-pointer'>
                Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask
