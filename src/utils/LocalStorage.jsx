localStorage.clear();

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Database",
        "taskDescription": "Update all records in the customer database.",
        "taskDate": "2025-03-10",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Report",
        "taskDescription": "Write a report on project progress for the last quarter.",
        "taskDate": "2025-03-05",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend weekly team meeting to discuss upcoming tasks.",
        "taskDate": "2025-03-12",
        "category": "Meeting"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Bug in Code",
        "taskDescription": "Resolve issue causing the app to crash.",
        "taskDate": "2025-03-09",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Code Review",
        "taskDescription": "Conduct code review for the new feature.",
        "taskDate": "2025-03-06",
        "category": "Review"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Prepare a presentation for the client meeting.",
        "taskDate": "2025-03-07",
        "category": "Presentation"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Neha",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Feedback",
        "taskDescription": "Collect and summarize feedback from clients on the latest feature.",
        "taskDate": "2025-03-11",
        "category": "Feedback"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Develop Feature",
        "taskDescription": "Develop a new feature based on client requirements.",
        "taskDate": "2025-03-05",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Test Application",
        "taskDescription": "Run tests on the new build to ensure no bugs.",
        "taskDate": "2025-03-08",
        "category": "Testing"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Saanvi",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Attend Workshop",
        "taskDescription": "Attend the company-sponsored workshop on new software tools.",
        "taskDate": "2025-03-10",
        "category": "Training"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prepare Budget",
        "taskDescription": "Prepare the budget proposal for next quarter.",
        "taskDate": "2025-03-06",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Email",
        "taskDescription": "Write an email to the stakeholders about project updates.",
        "taskDate": "2025-03-07",
        "category": "Communication"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Maya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design UI",
        "taskDescription": "Design the user interface for the new app feature.",
        "taskDate": "2025-03-09",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the project documentation for the latest changes.",
        "taskDate": "2025-03-06",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Call",
        "taskDescription": "Call the client to discuss their feedback on the app.",
        "taskDate": "2025-03-08",
        "category": "Communication"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Fix the critical bugs in the app before the release.",
        "taskDate": "2025-03-07",
        "category": "Development"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    }
  }
];

  
  const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  };
  
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employees, admin};
}

