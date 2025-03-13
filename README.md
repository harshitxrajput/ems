# Employee Management System (EMS)

A React-based employee management system with task tracking capabilities.

## Structure

```
src/
├── context/
│   └── AuthProvider.jsx      # Global context for auth and user data
├── pages/
│   ├── auth/
│   │   └── Login.jsx        # Login page
│   └── dashboard/
│       ├── Admin.jsx        # Admin dashboard
│       └── Employee.jsx     # Employee dashboard
├── components/
│   ├── TaskList/           # Task-related components
│   └── other/             # Shared components
└── utils/
    └── LocalStorage.jsx    # Local storage management
```

## Context API Implementation

The application uses React's Context API for global state management through `AuthProvider`:

- Manages authentication state
- Stores and provides access to:
  - Employee data
  - Admin data
  - Current user session

### Usage Example:
```jsx
const authData = useContext(AuthContext);
// Access employee data: authData.employees
// Access admin data: authData.admin
```

## Pages

### Login Page
- Handles both admin and employee authentication
- Validates credentials against stored data
- Routes to appropriate dashboard based on role

### Admin Dashboard
- Task creation interface
- Employee task management
- Overview of all tasks and their statuses

### Employee Dashboard
- Personal task list
- Task status updates
- Task statistics display

## Task Management

Tasks are categorized into:
- New Tasks
- Active Tasks
- Completed Tasks
- Failed Tasks

Each task contains:
- Title
- Description
- Due Date
- Category
- Status flags
