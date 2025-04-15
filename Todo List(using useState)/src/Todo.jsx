import { useState } from 'react';
import './Todo.css';

function Todo() {
  const [items, setItems] = useState([]);   // empty list by default
  const [task, setTask] = useState("");     // input box ka state

  // Add new task
  function addTask() {
    if (task.trim() !== "") {
      setItems([...items, task]); // add new task to list
      setTask(""); // clear input box
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
          <input className='inputTask'type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
          <button className='addTaskButton' onClick={addTask}>Add Task</button>
        </div>

        {/* Render all tasks */}
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
