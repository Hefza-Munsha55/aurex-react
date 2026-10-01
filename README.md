# TaskFlow - AUREX Internship (Month 2)

A modern, responsive task management application built with React + Vite. Designed for productivity with a clean, dark UI and fully responsive mobile experience.

**Intern:** Hefza Munsha | **Program:** AUREX Full-Stack Internship - Week 1 React Task

### 🔗 Live Demo
**Live Link:** [https://aurex-react-1.vercel.app](https://aurex-react-1.vercel.app)  
**GitHub Repo:** [https://github.com/Hefza-Munsha55/aurex-react](https://github.com/Hefza-Munsha55/aurex-react)

### ✨ Core Features
- **Add Tasks:** Controlled form input with useState
- **Dynamic Rendering:** Tasks rendered dynamically using list mapping with unique keys
- **Toggle Completion:** Mark task as complete / incomplete
- **Delete Tasks:** Remove tasks from list state
- **Input Validation:** Prevents empty task submission
- **Live Stats:** Real-time Total, Pending, Completed count
- **Fully Responsive:** No cut on mobile, optimized for all screens

### 🧱 Component Hierarchy (As per AUREX Requirement)
App.jsx (Main State)
 ├── Header.jsx
 ├── TaskForm.jsx (Handles input state & submission)
 ├── TaskList.jsx (Maps through array)
 │    └── TaskItem.jsx (Individual task display & actions)
 └── Stats
 
### 🛠️ Tech Stack
- React 18 + Vite, JSX, Hooks (useState)
- CSS3 - Flexbox, Grid, Radial Gradient, Media Queries
- State Lifting via Props
- Deployed on Vercel

### 📁 Folder Structure
src/
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
├── App.jsx
├── App.css
└── main.jsx

### 🚀 Setup 
git clone https://github.com/Hefza-Munsha55/week-1-react-task
cd week-1-react-task
npm install
npm run dev

🎯 Learning Outcomes
- React fundamentals, Components, Props & State
- Controlled forms and validation
- List rendering with keys and conditional rendering
- Reusable component architectureFixed real-world responsive issues (mobile cut, button wrapping)
👩‍💻 AuthorHefza Munsha - AUREX Intern© 2026 AUREX Internship - TaskFlow
