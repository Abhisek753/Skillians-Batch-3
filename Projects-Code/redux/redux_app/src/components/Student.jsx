import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudent } from "../redux/studentSlice";

const Student = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !course) {
      alert("Fill required fields");
      return;
    }
    dispatch(
      addStudent({
        id: Date.now(),
        name,
        age,
        course,
      })
    );
    setAge("");
    setCourse("");
    setName("");
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      {students?.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <button
                  onClick={() => dispatch(deleteStudent(student.id))}
                  style={{ color: "red" }}
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Student;
