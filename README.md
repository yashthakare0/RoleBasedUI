<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RoleBasedUI - Timetable</title>
</head>
<body>
  <header>
    <h1>RoleBasedUI - Timetable</h1>
    <p>
      RoleBasedUI - Timetable is a dynamic React-based application that provides a role-based user interface for managing class timetables. 
      This application demonstrates the use of modern web development practices, including role-based access control, state management, 
      and responsive design, and is tailored to showcase professional development skills.
    </p>
  </header>

  <section>
    <h2>Features</h2>
    <ul>
      <li><strong>Role-Based Access Control:</strong>
        <ul>
          <li>Teachers can Create, Edit, and Delete timetable entries.</li>
          <li>Students can only View the timetable.</li>
        </ul>
      </li>
      <li><strong>Responsive Design:</strong> Fully optimized for desktop and mobile devices.</li>
      <li><strong>Dynamic Timetable:</strong> Add, edit, and delete class schedules in real time.</li>
      <li><strong>Login System:</strong> Users can log in as either Teacher or Student.</li>
      <li><strong>Custom Animations:</strong> Beautifully designed UI with interactive animations and transitions.</li>
      <li><strong>State Management:</strong> Uses React's useState for managing application state.</li>
    </ul>
  </section>

  <section>
    <h2>Technology Stack</h2>
    <ul>
      <li><strong>Frontend:</strong> React.js</li>
      <li><strong>Styling:</strong> CSS3 (with responsive and modern design principles)</li>
      <li><strong>State Management:</strong> React Hooks (useState)</li>
      <li><strong>Version Control:</strong> Git and GitHub</li>
    </ul>
  </section>

  <section>
    <h2>Login Page</h2>
    <p>
      The login page allows users to log in by selecting their role (Teacher/Student).
    </p>
    <img src="https://github.com/user-attachments/assets/dc030f1b-0244-476b-96d0-388314456bb3" alt="Login Page Screenshot" style="max-width:100%;">
  </section>

  <section>
    <h2>Timetable Page</h2>
    <p>
      The timetable page dynamically displays entries and allows role-based actions.
    </p>
    <img src="https://github.com/user-attachments/assets/b8b8fe4e-e8e7-40a7-aa44-7c1b3fb99192" alt="Timetable Page Screenshot" style="max-width:100%;">
  </section>

  <section>
    <h2>Installation and Usage</h2>
    <h3>Prerequisites</h3>
    <ol>
      <li>Install Node.js (v14 or higher).</li>
      <li>Install Git for version control.</li>
    </ol>

    <h3>Setup</h3>
    <ol>
      <li>Clone the repository:</li>
      <pre>git clone https://github.com/your-username/RoleBasedUI-Timetable.git</pre>
      <li>Navigate to the project folder:</li>
      <pre>cd RoleBasedUI-Timetable</pre>
      <li>Install dependencies:</li>
      <pre>npm install</pre>
      <li>Start the development server:</li>
      <pre>npm start</pre>
      <li>Open the app in your browser:</li>
      <pre>Navigate to http://localhost:3000</pre>
    </ol>
  </section>

  <section>
    <h2>Project Structure</h2>
    <pre>
RoleBasedUI-Timetable/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Timetable.js
│   ├── styles/
│   │   ├── Login.css
│   │   ├── Timetable.css
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md
    </pre>
  </section>

  <section>
    <h2>Key Learnings</h2>
    <ul>
      <li>Building role-based access controls in React.</li>
      <li>Implementing dynamic state management using React Hooks.</li>
      <li>Designing modern, responsive UIs with CSS.</li>
      <li>Applying proper project organization and modularization.</li>
      <li>Working with Git and GitHub for version control and collaboration.</li>
    </ul>
  </section>

  <section>
    <h2>Future Enhancements</h2>
    <ul>
      <li>Add dark mode toggle.</li>
      <li>Integrate a backend system for persistent storage (e.g., Firebase, Node.js + MongoDB).</li>
      <li>Add user authentication with JWT.</li>
      <li>Improve animations and transitions for a smoother user experience.</li>
    </ul>
  </section>

  <section>
    <h2>How to Contribute</h2>
    <ol>
      <li>Fork the repository.</li>
      <li>Create a new branch:
        <pre>git checkout -b feature-name</pre>
      </li>
      <li>Commit your changes:
        <pre>git commit -m "Add feature-name"</pre>
      </li>
      <li>Push to the branch:
        <pre>git push origin feature-name</pre>
      </li>
      <li>Open a pull request.</li>
    </ol>
  </section>

  <footer>
    <h2>Contact</h2>
    <p>Author: Yash Thakare</p>
    <p>Email: yashthakare56789@gmail.com</p>
    <p>GitHub: <a href="https://github.com/yashthakare0">https://github.com/yashthakare0</a></p>
  </footer>
</body>
</html>
