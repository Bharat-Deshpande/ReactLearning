import React, { useMemo, useState } from 'react'

const expensiveCalculation = (num) =>{
    console.log("Calculating...");
    for(let i=0; i<1000000000; i++){
        num+=1;
    }
    return num
}
const ToDo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const calculations = useMemo(()=> expensiveCalculation(count), [count]) 

    // Memoization - it is storing this inside a cache

    const increment = () => {
        setCount((c)=>c+1)
    }
    const addTodo = () => {
        setTodos((t) => [...t, "New ToDo"] );
    }
  return (
    <div>
      <div>
        <h2>My ToDos</h2>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>{calculations}
      </div>
    </div>
  )
}

export default ToDo
