import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', password: '' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage({ text: '', type: '' })

    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setMessage({ text: 'Please fill in all fields.', type: 'error' })
      return
    }

    setUsers((current) => [
      {
        id: Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
      },
      ...current,
    ])

    setMessage({ text: 'Registration Successful!', type: 'success' })
    resetForm()
  }

  return (
    <div className="app-shell">
      <div className="registration-card">
        <h1>Registration Form</h1>

        <form className="registration-form" onSubmit={handleSubmit} noValidate>
          <label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </label>

          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </label>

          <label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </label>

          <button type="submit" className="submit-button">
            Register
          </button>

          {message.text && (
            <div className={`form-notice ${message.type}`}>{message.text}</div>
          )}
        </form>

        {users.length > 0 && (
          <div className="registered-panel">
            <h2>Registered Users</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <span className="bullet">•</span> {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
