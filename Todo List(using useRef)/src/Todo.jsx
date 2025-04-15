import { useState, useRef } from 'react';
import './Todo.css';

function Todo() {
  const [items, setItems] = useState([]);      // store all tasks
  const task = useRef("");                   // reference to input element
  
  // Add new task
  function addTask() {
    const value = task.current.value;
    if (value !== "") {
      setItems(prevItems => [...prevItems, value]);  // ✅ functional update
      task.current.value = "";
    }
  }
  

  // Delete a task by index
  function deleteTask(indexToDelete) {
    const filteredItems = items.filter((_, index) => index !== indexToDelete);
    setItems(filteredItems);
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="tasks">
        <div className='input'>
          <input className='inputTask' type="text" ref={ task} />
          <button className='addTaskButton' onClick={addTask}>Add Task</button>
        </div>
      
        {items.map((item, index) => (
          <div className='list-item' key={index}>
            <div>
              <label htmlFor={index}>{`${index+1}.  ${item}`}</label>
              <input type="checkbox" id={index} />
            </div>
            <button className='delete-button'onClick={() => deleteTask(index)}> Delete </button>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Todo;
