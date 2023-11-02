import { useState } from 'react'
import './App.css'

import shoppingIcon from './assets/shopping-icon.svg'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'

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

  return (
    <>
    <nav className='nav'>
      <img className='nav-icon' src={shoppingIcon} alt="Shopping Icon" />
      <h1 className='nav-title'>Shopping List</h1>
    </nav>

    <section className='container'>
      <form className='form' onSubmit={addList}>
        <input className='input' type="text" placeholder='List'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className='add-button' type='submit'>Add</button>
      </form>
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
      
    </section>
    </>
  )
}

export default App
