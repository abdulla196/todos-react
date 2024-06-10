
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const[todos,setTodos]=useState([])
  const inputRef = useRef();
  const handlerInput = ()=>{
    const text= inputRef.current.value;
    const newItem = {completed:false , text};
    setTodos([...todos,newItem]);
    inputRef.current.value = ''
  }
  const handleItemTodo = (index)=> {
    const newItems =[...todos];
    newItems[index].completed = !newItems[index].completed;
    setTodos(newItems);
  }
  const handleItemDelete = (index)=>{
    const Items =[...todos];
    Items.splice(index,1);
    setTodos(Items)
  }
  return (
    <div className="App">
      <div>
        <h1 className='title'>
          Todo List 
        </h1>
        <div className='card'>
          <input type='text' ref={inputRef}/>
          <button  onClick={handlerInput}>Add Todos</button>
          <ul>
            {todos.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemTodo(index)}
                style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
              >
                <p>
                <span onClick={() => handleItemTodo(index)} style={{ cursor: 'pointer' }}>
                  {item.text}
                </span>
                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleItemDelete(index);
                  }} 
                  style={{ marginLeft: '10px' }}
                >
                  ❌
                </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
