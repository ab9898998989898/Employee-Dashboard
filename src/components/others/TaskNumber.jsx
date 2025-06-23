import React from "react";

const TaskNumber = ({data}) => {

  return (
    <div className="flex flex-wrap justify-between gap-5 mt-10 w-full">
      <div className="flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[23%] bg-blue-500 py-6 px-4 rounded-lg shadow-xl">
        <h2 className="text-4xl text-white font-bold mb-4">{data.taskCount.newTask}</h2>
        <h3 className="text-2xl text-white font-bold">New Tasks</h3>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[23%] bg-yellow-500 py-6 px-4 rounded-lg shadow-xl">
        <h2 className="text-4xl text-white font-bold mb-4">{data.taskCount.active}</h2>
        <h3 className="text-2xl text-white font-bold">Accepted Tasks</h3>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[23%] bg-green-500 py-6 px-4 rounded-lg shadow-xl">
        <h2 className="text-4xl text-white font-bold mb-4">{data.taskCount.completedTask}</h2>
        <h3 className="text-2xl text-white font-bold">Completed Tasks</h3>
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[23%] bg-red-500 py-6 px-4 rounded-lg shadow-xl">
        <h2 className="text-4xl text-white font-bold mb-4">{data.taskCount.failed}</h2>
        <h3 className="text-2xl text-white font-bold">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
