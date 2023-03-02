import { useState, useEffect } from 'react'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError('Error while fetching users'))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}