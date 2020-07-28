import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, gql } from "@apollo/client";

import defs from './defs'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
const ENTER_KEY = 13

const TodoApp = () => {
  const [nowShowing, setNowShowing] = useState(defs.ALL_TODOS);
  const [getEditing, setEditing] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [shownTodos, setShownTodos] = useState([]);
  
  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  const handleNewTodoKeyDown = event => {
    if (event.keyCode !== ENTER_KEY) {
      return
    }
    event.preventDefault()
    const val = newTodo
    if (val) {
      add(val)
      setNewTodo('')
    }
  }

  const add = (title) => {
    // add ADD mutation here
  }

  const destroy = todo => {
    // add DELETE mutation here
  }

  const cancel = () =>
    setEditing(null)

  const todoItems = shownTodos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={() => {}}
        onDestroy={() => destroy(todo)}
        onEdit={() => {}}
        editing={getEditing === todo.id}
        onSave={text => {}}
        onCancel={cancel}
      />
    )
  })

  const activeTodoCount = shownTodos.reduce(function (accum, todo) {
    return todo.completed ? accum : accum + 1
  }, 0)

  const completedCount = shownTodos.length - activeTodoCount

  const footer = (activeTodoCount || completedCount)
    ? <TodoFooter
        count={activeTodoCount}
        completedCount={completedCount}
        nowShowing={nowShowing}
        onClearCompleted={() => {}}
      />
    : null

  const main = !shownTodos.length
    ? null
    : (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={() => {}}
          checked={activeTodoCount === 0}
        />
        <label
          htmlFor="toggle-all"
        />
        <ul className="todo-list">
          {todoItems}
        </ul>
      </section>
    )

  return (
    <div>
      <header className="header">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTodo}
          onKeyDown={handleNewTodoKeyDown}
          onChange={handleChange}
          autoFocus={true}
        />
      </header>
      {main}
      {footer}
    </div>
  )
}

export default TodoApp
