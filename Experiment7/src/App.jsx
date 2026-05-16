import './App.css'

function Student({ name, course, marks }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>
        <strong>Marks:</strong> {marks}
      </p>
    </div>
  )
}

function App() {
  const students = [
    { name: 'Rahul Sharma', course: 'Computer Science', marks: 85 },
    { name: 'Anita Verma', course: 'Information Technology', marks: 92 },
    { name: 'Rohan Gupta', course: 'Electronics', marks: 78 },
  ]

  return (
    <main className="student-app">
      <section className="student-panel">
        <h1>Student Information</h1>
        {students.map((student) => (
          <Student
            key={student.name}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </section>
    </main>
  )
}

export default App
