import Filter from './Filter';
import TodoList from './TodoList';  

function Home() {

    return (
        <>
            <div className="container">
                <Filter />
            
                <TodoList />
            </div>
        </>
        )

}

export default  Home;