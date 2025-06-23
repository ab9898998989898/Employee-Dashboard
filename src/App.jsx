import React, { useContext, useEffect, useState } from 'react';
import Login from './components/auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { getLoggedInUser, setLoggedInUser } from './utils/LocalStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // ✅ Restore login on refresh
 useEffect(() => {
  const storedUser = getLoggedInUser();

  if (storedUser) {
    setUser({ email: storedUser.email, role: storedUser.role });

    if (storedUser.role === 'employee') {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];

      const freshEmployee = employees.find(emp => emp.email === storedUser.email);
      if (freshEmployee) {
        setLoggedInUserData(freshEmployee); // ✅ latest data
      }
    }
  }
}, []);



  const handleLogin = (email, password) => {
  if (email === 'admin@example.com' && password === 'admin123') {
    const user = { email, role: 'admin' };
    setUser(user);
    setLoggedInUser(user);
  } else if (authData?.employees) {
    const employee = authData.employees.find(
      emp => emp.email === email && emp.password === password
    );
    if (employee) {
      const user = { email, role: 'employee' };
      setUser(user);
      setLoggedInUser({ email, role: 'employee' }); // ✅ simpler format
      setLoggedInUserData(employee); // ✅ this is still needed for now
    } else {
      alert('Invalid credentials');
    }
  }
};



  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user?.role === 'employee' && (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      )}
      {user?.role === 'admin' && (
        <AdminDashboard changeUser={setUser}   />
      )}
    </>
  );
};

export default App;
