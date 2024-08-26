import Filter from './Filter';
import AddTodoModal from './modals/AddToDoModal';
import ModalWindow from './modals/ModalWindow';
import TodoList from './TodoList';  
import {TodosContext} from '../TodosContext';
import { useContext } from 'react';

function Home() {
    const store = useContext(TodosContext);
    return (
        <>
        {
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