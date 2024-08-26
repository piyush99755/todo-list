import Header from './components/Header';
import Home from './components/Home';
import './App.scss';
import {TodosProvider} from './TodosContext.js'



  

function App() {
  
  return (
    <>
      <main>  {/*rendering header and home components */ }
        <TodosProvider>
         
            <Header appName="To-Do List with React" />

            <Home />

        </TodosProvider>
        
        

      </main>
    </>
  )
}

export default App;
