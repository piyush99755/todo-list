import Filter from './Filter';
import AddTodoModal from './modals/AddToDoModal';
import ModalWindow from './modals/ModalWindow';
import TodoList from './TodoList';  
import {TodosContext} from '../TodosContext';
import { useContext } from 'react';

function Home() {
    const store = useContext(TodosContext); //getting todos from context..
    return (
        <>
        {
            //only when modal state is set to active, render following components.. 
            store.modalIsActive &&
            <ModalWindow>
                <AddTodoModal/>
            </ModalWindow>
        }
            
            <div className="container">
                <Filter />
            
                <TodoList />
            </div>
        </>
        )

}

export default  Home;