
import React,{useState} from 'react'
import './app.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login'
import Sidebar from './components/sidebar'
import Chat from './components/chat'



function App() {
  
  return (
    <div className="app">
      
         
      
         
     
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
     
     
    </div>
  );
}

export default App;
