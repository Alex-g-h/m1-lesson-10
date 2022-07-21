const student = {
  fullName: "Alex",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"]
};

const updatedStudent = giveJobToStudent(student, "web developer");
console.log('updated object:', updatedStudent);

/**
 * Show a short message. Add new property 'job' with position to new object and return it.
 * @param {*} student Student object
 * @param {*} jobName New job name
 * @return 
 */
function giveJobToStudent(student, jobName) {
  alert(`Поздравляем! У студента ${student.fullName} появилась новая работа!\
  Теперь он ${jobName}`);
  const newStudent = {
    ...student,
    job: jobName
  }
  return newStudent;
}