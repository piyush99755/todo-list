import { createContext, useEffect, useReducer, useState } from "react";

//context that can be used in other child components..
export const TodosContext = createContext(''); 

//getting list of todos on every time browser refresh
const initialTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')): [];
    
  
  
  
    
  
  export  function TodosProvider({children}) 
  {
    //reducer and state variables...
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    const [modalIsActive, setModalIsActive] = useState(false);
    const [filterBy,setFilterBy] = useState('');

    function filteredTodos() {
      switch(filterBy){
        case 'todo': 
          return todos.filter(todo => !todo.isDone);

        
        case 'done': 
          return todos.filter(todo => todo.isDone);
      

        default:
          return todos;

        
      }
    }
    //use effect hook to set todos in local storage...
    useEffect( () => {
      localStorage.setItem('todos',JSON.stringify(todos));

    }, [todos])
    return (
      <>
        <main>
          <TodosContext.Provider 
          value=
          {{todos, 
          dispatch,
          modalIsActive, 
          setModalIsActive,
          filterBy,
          setFilterBy,
          filteredTodos
          }}>
             {children}
  
          </TodosContext.Provider>
          
        </main>
      </>
    )
  }
   

  //todos reducer actions and its functionality... 
   function todosReducer(todos, action) {
    switch(action.type) {
        case 'deleted': {
            return todos.filter(todo => todo.id !== action.id);
        }

        case 'added': {
          let newTodo = action.newTodo;
           newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id))+1 : 1;
           
          return [...todos, newTodo ];

        }

        case 'toggledIsDone': {
            return (todos.map(todo => {
                if(todo.id === action.id)
                {
                    todo.isDone = !todo.isDone;
                    return todo;
                }else{
                    return todo;
                }
          }));
        }
        default:{


        }
        
    }
}
  