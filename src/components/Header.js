import './Header.scss';
import { TodosContext } from '../TodosContext';
import { useContext } from 'react';

function Header({appName}) {
    const store = useContext(TodosContext);
        return (
            <>
              <div className="header">
                  <div className="container">
                      <div className="header-side">
                          <h1>
                              {appName}
                          </h1>
                      </div>
                      <div className="header-side">
                          <button onClick = {() => {store.setModalIsActive(true)}} className="btn secondary">+ Add To-Do</button>
                      </div>
                  </div>
              </div>
            </>
          )
    

}

export default Header;