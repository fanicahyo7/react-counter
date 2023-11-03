import { useState } from 'react'
import './App.css'

import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import Navbar from './components/Navbar'
import Container from './components/Container'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title : 'Tahu Sutra', count : 1},
    {title : 'Tomat', count : 1},
    {title : 'kentang', count : 1}
  ])

  const addList = (e) => {
    e.preventDefault()

    if (!value) {
      alert('No Blank Item!')
      return
    }

    const newTodos = [...todos, {
      title : value, count : 1
    }]

    setTodos(newTodos)
    setValue('')
  }

  const handleAdd = (index) => {
    const newTodos = [...todos]

    newTodos[index].count += 1

    setTodos(newTodos)
  }

  const handleMin = (index) => {
    const newTodos = [...todos]

    if (newTodos[index].count > 0) {
      newTodos[index].count -= 1
    } else {
      newTodos.splice(index,1)
    }

    setTodos(newTodos)
  }

  const getCount = () => {
    const data = todos.reduce((total, num) => {
      return total + num.count
    },0)

    return data
  }

  return (
    <>
    <Navbar />

    <Container>
      <form className='form' onSubmit={addList}>
        <input className='input' type="text" placeholder='List'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className='add-button' type='submit'>Add</button>
      </form>

      <div className='info'>
        <div className='info-total'>
          <p>{`Total List : ${todos.length}`}</p>
        </div>

        <div className='info-total'>
          <p>{`Total Count : ${getCount()}`}</p>
        </div>

        <button onClick={() => setTodos([])} className='delete-all-button'>
          Delete All List
        </button>
      </div>

      {todos.length > 0 ? (
        <div className='todos'>
          {todos.map((todo, index) => {
            return (
              <div key={index} className={`todo${!(todos.length == index + 1) ? ' todo-divider' : ''}`}>
                {todo.title}
                
                <div className='todo-icon-wrapper'>

                <div className='todo-count'>{todo.count}</div>

                <button className='todo-action-button' onClick={() => handleMin(index)}>
                  <img src={minusIcon} alt="Minus Icon" />
                </button>

                <button className='todo-action-button' onClick={() => handleAdd(index)}>
                  <img src={plusIcon} alt="Plus Icon" />
                </button>

                </div>

              </div>
            )
          })}
        </div>
      ) : (
        <div>Kosong</div>
      ) } 
      
    </Container>
    </>
  )
}

export default App
