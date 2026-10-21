export function formatStudentName(name) {
  return name.trim().replace(/\b\w/g, char => char.toUpperCase());
}

export function isValidStudent(name, registerNumber) {
  return name.trim() !== "" && registerNumber.trim() !== "";
}

