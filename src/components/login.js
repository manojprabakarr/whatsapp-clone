import React from 'react'
import {auth,provider} from '../firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './stateprovider'
import './login.css'



function Login() {
    const [{},dispatch]=useStateValue();

    const Signin=()=> {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));

    }
    
    
    return (
        <div className="login">
           <div className="login-container">
               <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png" alt=""/>

               <div className="login-text">
                   <h1>Sign Into Whatsapp</h1>

               </div>

               <button type="submit" onClick={Signin}>Login to Google</button>

           </div>

           
            
        </div>
    )
}

export default Login
