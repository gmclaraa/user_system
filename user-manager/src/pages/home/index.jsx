import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import Trash from '../../assets/trash.svg'

const API_URL = 'https://user-system-wzx4.onrender.com'

function Home() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  async function getUsers() {
    const response = await axios.get(`${API_URL}/usuarios`)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  async function createUser() {
    await axios.post(`${API_URL}/usuarios`, {
      name,
      age: Number(age),
      email,
    })
    setName('')
    setAge('')
    setEmail('')
    getUsers()
  }

  async function deleteUser(id) {
    await axios.delete(`${API_URL}/usuarios/${id}`)
    getUsers()
  }

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input
          placeholder='Nome'
          name='nome'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='Idade'
          name='idade'
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder='E-mail'
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='button' onClick={createUser}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div className='card' key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span> {user.email}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home