import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import "./styles.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Load saved students
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students"));
    if (savedStudents) setStudents(savedStudents);
  }, []);

  // Save students
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add student
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Update student
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <h1>Student Management System</h1>

      {/* Animated Toggle Button */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        <div
          className={
            darkMode ? "toggle-circle move" : "toggle-circle"
          }
        ></div>
      </button>

      <StudentForm addStudent={addStudent} />

      <div className="top-bar">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter filterClass={filterClass} setFilterClass={setFilterClass} />
      </div>

      <StudentList
        students={students}
        search={search}
        filterClass={filterClass}
        deleteStudent={deleteStudent}
        updateStudent={updateStudent}
      />
    </div>
  );
}

export default App;

