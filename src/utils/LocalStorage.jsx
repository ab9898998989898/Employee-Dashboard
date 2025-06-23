  const employees = [
  {
    id: 1,
    name: "Ali Raza",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a responsive homepage layout.",
        date: "2025-06-13",
        category: "Design",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve the issue with user login.",
        date: "2025-06-10",
        category: "Development",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Add tests for the login component.",
        date: "2025-06-11",
        category: "Testing",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Ahmed Khan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Profile Page",
        description: "Improve the UI of the profile section.",
        date: "2025-06-15",
        category: "UI/UX",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Create weekly backup of user data.",
        date: "2025-06-09",
        category: "Maintenance",
        active: false,
        newTask: false,
        completedTask: false,
        failed: true
      },
      {
        title: "Client Meeting",
        description: "Discuss project updates with client.",
        date: "2025-06-12",
        category: "Management",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Zain Malik",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug Testing",
        description: "Test major flows for bugs and report them.",
        date: "2025-06-12",
        category: "QA",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Integrate payment gateway API.",
        date: "2025-06-11",
        category: "Backend",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      },
      {
        title: "Fix Navbar Issue",
        description: "Resolve the navbar dropdown overlap issue.",
        date: "2025-06-10",
        category: "Frontend",
        active: false,
        newTask: false,
        completedTask: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completedTask: 1,
      failed: 1
    }
  },
  {
    id: 4,
    name: "Farhan Shah",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "SEO Optimization",
        description: "Improve on-page SEO for homepage.",
        date: "2025-06-12",
        category: "Marketing",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Write Blog Post",
        description: "Publish article on recent updates.",
        date: "2025-06-10",
        category: "Content",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      },
      {
        title: "User Survey",
        description: "Collect feedback from new users.",
        date: "2025-06-14",
        category: "Research",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failed: 0
    }
  },
  {
    id: 5,
    name: "Bilal Haider",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Icons",
        description: "Design icons for new features.",
        date: "2025-06-09",
        category: "Graphics",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      },
      {
        title: "Fix Crash Issue",
        description: "App crashes on launch for iOS.",
        date: "2025-06-11",
        category: "Debugging",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      },
      {
        title: "Implement Dark Mode",
        description: "Support for light/dark theme toggle.",
        date: "2025-06-13",
        category: "Feature",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Prepare Release Notes",
        description: "Write detailed release notes for v1.2.0",
        date: "2025-06-14",
        category: "Documentation",
        active: false,
        newTask: false,
        completedTask: false,
        failed: true
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failed: 1
    }
  }
];
const admin = [
  {
    id: 1,
    name: "Abdullah",
    email: "admin@example.com",
    password: "123"
  }
];


export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    admin: JSON.parse(localStorage.getItem("admin")) || []
  };
};

export const setLocalStorage = () => {
  const isInitialized = localStorage.getItem("isInitialized");
  if (!isInitialized) {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
    localStorage.setItem("isInitialized", "true");
  }
};

export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
};

export const setLoggedInUser = (user) => {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem("loggedInUser");
};