import { useState } from "react";
import './App.css'

export default function TodoList(){

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function addTask(event){
        setTask(event.target.value)
        console.log(task);
    }

    function addTodoElement(event){
        event.preventDefault();
        setTodos(t => [...t, task])
    }

    function deleteTodo(index){
        setTodos(todos.filter((_,i) => i !== index ))
    }



    return(
        <>
        <form onSubmit={addTodoElement} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">Todo App</label>
                <br/>
                <input type="text" id="item" value={task} onChange={(e) => addTask(e)} placeholder="Todo"/>
            </div>
            <button className="btn">Add</button>
            
        </form>
        <h2 className="header">List</h2>
        <ul className="list">
            {
                todos.map((todo, index) => <li key={index}>
                <label>
                    <input type="checkbox" />
                    {todo}
                </label>
                <button className="btn btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
            </li>)
            }
        </ul>
        </>
    );
}