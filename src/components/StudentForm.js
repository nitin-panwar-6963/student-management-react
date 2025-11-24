import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function StudentForm({ addStudent }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    className: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ ...form, id: uuidv4() });
    setForm({ name: "", age: "", className: "", email: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input type="text" name="name" placeholder="Name"
        value={form.name} onChange={handleChange} required />

      <input type="number" name="age" placeholder="Age"
        value={form.age} onChange={handleChange} required />

      <input type="text" name="className" placeholder="Class"
        value={form.className} onChange={handleChange} required />

      <input type="email" name="email" placeholder="Email"
        value={form.email} onChange={handleChange} required />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;

