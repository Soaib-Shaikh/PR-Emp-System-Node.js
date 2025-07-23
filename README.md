# Employee Management System (Node.js)

A simple Employee Management System built with Node.js, Express, and EJS. This application allows you to add, view, edit, search and delete employee records in-memory (no database required).

# Output 

1. Add Employee

![alt text](./output/add-emp.png)

2. View Employees Data

![alt text](./output/view-emp.png)

3. Edit Employee

![alt text](./output/edit-emp.png)

4. Delete Employee

![alt text](./output/delete-emp.png)

5. Search Employee

![alt text](./output/search-emp.png)

## Features
- Add new employees
- View all employees
- Edit employee details
- Delete employees
- Search employees
- Simple and clean UI with EJS templates
- In-memory data storage (no database setup required)

## Technologies Used
- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript Templates)
- **HTML/CSS** (static files served from `public/`)

## Folder Structure
```
├── index.js               # Main server file
├── package.json           # Project metadata and dependencies
├── public/                # Static assets (CSS, images, etc.)
│   └── css/
│       └── style.css
├── views/                 # EJS templates
│   ├── edit.ejs
│   ├── header.ejs
│   ├── index.ejs
│   └── viewdata.ejs
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/Soaib-Shaikh/PR-Emp-System-Node.js.git
   ```
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application
Start the server with:
```
node index.js
```

The app will be available at [http://localhost:8081](http://localhost:8081)

## Usage
- Go to the home page to add a new employee.
- View all employees at `/viewdata`.
- Edit or delete employees from the view page.

## Notes
- All data is stored in memory. Restarting the server will clear all employee records.
- This project is for learning/demo purposes and does not use a database.

## License
This project is open source and available under the [MIT License](LICENSE).
