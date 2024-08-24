/* eslint-disable no-alert */
import './TodoList.scss';
import Todo from './Todo';
import {useState} from 'react';

const initialTodos = [
    { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
    { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
    { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
  ];

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    function deleteHandler(id){
         
       setTodos(todos.filter(todo => todo.id !== id));
    
    }

    function toggleIsDoneHandler(id) {
        setTodos(todos.map(todo => {
                if(todo.id === id)
                {
                    todo.isDone = !todo.isDone;
                    return todo;
                }else{
                    return todo;
                }
        })
    )
        

    }
    return (
        <>
            <div className="todos">
            {
                todos.map(todo =>
                    <Todo
                     deleteTodo = {(id) => deleteHandler(id) }
                     toggleIsDone={ (id) => toggleIsDoneHandler(id)}
                     todo={todo}
                     key={todo.id}
                    />
                )
            }
                
                
                
    
            </div>
        </>
      )

}

export default TodoList;