import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '68764387',
      name: 'Rodolfo',
      age: 22,
      email: 'rod@email.com'
    },
    {
      id: '68764388',
      name: 'Aline',
      age: 33,
      email: 'aline@email.com'
    }

  ]
  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>


      {users.map((user) => (
        <div className='card' key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span> {user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}


    </div>
  )
}

export default Home