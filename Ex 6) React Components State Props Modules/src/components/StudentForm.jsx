import { useState } from "react";
import { formatStudentName, isValidStudent } from "../utils/studentUtils";

function StudentForm({ onRegister }) {
  const [name, setName] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [department, setDepartment] = useState("Information Technology");

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValidStudent(name, registerNumber)) {
      alert("Please fill in all required fields.");
      return;
    }

    onRegister({
      name: formatStudentName(name),
      registerNumber: registerNumber.trim(),
      department
    });

    setName("");
    setRegisterNumber("");
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <label>Student Name</label>
      <input
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Enter your name"
        required
      />

      <label>Register Number</label>
      <input
        value={registerNumber}
        onChange={event => setRegisterNumber(event.target.value)}
        placeholder="Enter register number"
        required
      />

      <label>Department</label>
      <select
        value={department}
        onChange={event => setDepartment(event.target.value)}
      >
        <option>Information Technology</option>
        <option>Computer Science and Engineering</option>
        <option>Artificial Intelligence and Data Science</option>
      </select>

      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;
