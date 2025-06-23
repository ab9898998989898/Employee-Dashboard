import React, { useState } from 'react';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [Task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    setTask({title, date, assignee, category, description, active: false, newTask: true, completedTask: false, failed: false});
    console.log("Task Created", { title, date, assignee, category, description },Task);
    const data = JSON.parse(localStorage.getItem('employees'))
    console.log(data);
    data.forEach(e => {
      if(assignee === e.name) {
        e.tasks.push({
          title,
          date,
          assignee,
          category,
          description,
          active: false,
          newTask: true,
          completedTask: false,
          failed: false
        });
      }
    });
    localStorage.setItem('employees', JSON.stringify(data));

    // Clear form
    setTitle('');
    setDate('');
    setAssignee('');
    setCategory('');
    setDescription('');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c1c] p-5 border rounded-lg shadow-lg w-full flex flex-col gap-5"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <div>
              <h3 className="text-emerald-400 font-[Poppins] font-semibold mb-1">Task Title</h3>
              <input
                className="bg-transparent rounded text-white p-2 w-full outline-1 outline-emerald-900 placeholder:text-gray-300"
                type="text"
                placeholder="Enter Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-emerald-400 font-[Poppins] font-semibold mb-1">Date</h3>
              <input
                className="bg-transparent text-white rounded p-2 w-full outline-1 outline-emerald-900 placeholder:text-gray-300"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-emerald-400 font-[Poppins] font-semibold mb-1">Assign To</h3>
              <input
                className="bg-transparent text-white rounded p-2 w-full outline-1 outline-emerald-900 placeholder:text-gray-300"
                type="text"
                placeholder="Enter Assignee Name"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-emerald-400 font-[Poppins] font-semibold mb-1">Category</h3>
              <input
                className="bg-transparent text-white rounded outline-1 p-2 w-full outline-emerald-900 placeholder:text-gray-300"
                type="text"
                placeholder="Enter Category Name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-emerald-400 font-[Poppins] font-semibold mb-1">Description</h3>
            <textarea
              className="bg-transparent text-white outline-1 rounded outline-emerald-900 p-2 w-full h-full min-h-[13.5rem] placeholder:text-gray-300"
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
