function StudentProfile({ name, registerNumber, department }) {
  return (
    <div className="student-card">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Register Number:</strong> {registerNumber}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
}

export default StudentProfile;

