# 🚀 Project React - Employee Task Management Dashboard

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18+-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-teal?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-4+-yellow?logo=vite)

---

## 📚 Overview

**Project React** is a modern, responsive Employee Task Management Dashboard built with React, Vite, and TailwindCSS.  
It features role-based authentication (Admin & Employee), real-time task assignment, status tracking, and a clean, intuitive UI.

---

## ✨ Features

- **Role-based Login:** Secure login for Admin and Employees.
- **Admin Dashboard:**
  - Create and assign tasks to employees.
  - View all tasks and their statuses.
  - Track employee performance.
- **Employee Dashboard:**
  - View assigned tasks.
  - Update task status (New, Active, Completed, Failed).
  - See task statistics.
- **Persistent Data:** Uses localStorage for data persistence.
- **Responsive Design:** Fully mobile-friendly and desktop-ready.
- **Modern UI:** Built with TailwindCSS for a sleek look.
- **Logout Functionality:** Secure session management.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/)
- **State Management:** React Context API
- **Persistence:** Browser localStorage

---

## 🚦 Getting Started

### 1. **Clone the repository**

```sh
git clone https://github.com/your-username/project-react.git
cd project-react
```

### 2. **Install dependencies**

```sh
npm install
```

### 3. **Run the development server**

```sh
npm run dev
```

### 4. **Open in your browser**

Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## 🔑 Default Credentials

- **Admin**
  - Email: `admin@example.com`
  - Password: `admin123`
- **Employee**
  - Email: `employee1@example.com`
  - Password: `emp123`
  - (You can add more employees in the localStorage or via the Admin dashboard.)

---

## 📁 Project Structure

```
src/
  components/
    auth/           # Login and authentication components
    Dashboard/      # Admin and Employee dashboards
    TaskList/       # Task display components
    others/         # Shared UI components (Header, etc.)
  context/          # React Context providers
  utils/            # LocalStorage helpers
  App.jsx           # Main app logic
  main.jsx          # Entry point
```

---

## 📝 Customization

- **Add Employees:** Update the `LocalStorage.jsx` file or use the Admin dashboard.
- **Change Task Categories:** Modify the task creation form in `CreateTask.jsx`.
- **Styling:** Tweak Tailwind classes for your brand.

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/your-username/project-react/issues).

---

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

_Made with ❤️ using React, Vite, and TailwindCSS._
