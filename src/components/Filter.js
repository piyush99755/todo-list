import { useContext } from 'react';
import './Filter.scss';
import { TodosContext } from '../TodosContext';

function Filter() {
    const store = useContext(TodosContext);
    return (
        <>
            <div className="filters">
                <div>
                    <p>Filter by state</p>
                    <div className="badges">
                        <div 
                        //flitering through options and implementing click events for each type..
                           className={`badge ${store.filterBy === 'todo' ? 'selected' : ''}`}
                           onClick = {() => store.setFilterBy('todo')}>
                            To-Do
                        </div>
                        <div 
                           className={`badge ${store.filterBy === 'done' ? 'selected' : ''}`}
                           onClick = {() => store.setFilterBy('done')}>
                            Done
                        </div>
                        {
                            store.filterBy &&
                            <span  onClick = {() => store.setFilterBy('')} 
                             className="clear">
                            x clear
                            </span>
                        }
                        
                    </div>
                </div>
            </div>
        </>
        )

}

export default Filter;