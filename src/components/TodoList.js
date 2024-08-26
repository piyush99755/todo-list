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
                //applying functionality of filtering todos according to their state such as done or todo...
                store.filteredTodos().length ? store.filteredTodos().map(todo =>
                     <Todo
                      todo={todo}
                      key={todo.id}
                     />
                 ) :
                 'No To-Dos available.'
             }
                 
            </div>
         </>
       )
 
 }
 
 export default TodoList;



    