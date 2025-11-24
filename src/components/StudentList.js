import React, { useState } from "react";

function StudentList({ students, search, filterClass, deleteStudent, updateStudent }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    age: "",
    className: "",
    email: ""
  });

  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditForm(student);
  };

  const saveEdit = () => {
    updateStudent(editForm);
    setEditingId(null);
  };

  const filteredStudents = students.filter((s) => {
    return (
      s.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterClass === "" || s.className === filterClass)
    );
  });

  return (
    <div className="list">
      <h2>Student List</h2>

      {filteredStudents.map((s) => (
        <div className="card" key={s.id}>
          {editingId === s.id ? (
            <>
              <input
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
              <input
                value={editForm.age}
                onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
              />
              <input
                value={editForm.className}
                onChange={(e) => setEditForm({ ...editForm, className: e.target.value })}
              />
              <input
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
              />

              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p><b>Name:</b> {s.name}</p>
              <p><b>Age:</b> {s.age}</p>
              <p><b>Class:</b> {s.className}</p>
              <p><b>Email:</b> {s.email}</p>

              <button onClick={() => handleEdit(s)}>Edit</button>
              <button onClick={() => deleteStudent(s.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;

