/* eslint-disable no-alert */
import './TodoList.scss';
import Todo from './Todo';
import {useContext} from 'react';
import { TodosContext } from '../TodosContext';

function TodoList() {
    const store = useContext(TodosContext); //replace state hook with useContext 
     return (
         <>
             <div className="todos">
             {
                 store.todos.map(todo =>
                     <Todo
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



    