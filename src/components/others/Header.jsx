import React from 'react'

const Header = ({ changeUser }) => {
  const handleLogout = () => {
    localStorage.setItem('loggedInUser','')
    changeUser(null);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white p-4 gap-3 sm:gap-0">
      <h1 className="text-3xl font-semibold">
        Hello <br /> <span className="text-4xl font-bold">Hello👋</span>
      </h1>
      <button onClick={handleLogout} className="bg-red-500 px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-red-600 active:bg-red-900">
        Logout
      </button>
    </div>
  )
}

export default Header
