
import React from 'react'
import './app.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login'
import Sidebar from './components/sidebar'
import Chat from './components/chat'
import {useStateValue} from './components/stateprovider'


function App() {
  const[{user},dispatch]=useStateValue();
  
  return (
    <div className="app">
      {!user ? ( <Login/>
      ):(

     
        
      
         
     
      <div className="app_body">
        <Router>
        <Sidebar/>
        <Switch>
        <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                <Chat/>
                </Route>  

        </Switch>

        </Router>
        

   
        

      </div>
       )}
     
     
    </div>
  );
}

export default App;
