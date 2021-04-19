import React from 'react'
import {Avatar} from '@material-ui/core'
import './sidebarchat.css'

function Sidebarchat() {
    return (
        <div className="sidebarchat">
            <Avatar style={{objectFit:"contain",width:"50px",height:"50px"}}/>
            <div className="sidebarchat-info">
              <h2>name</h2>
              <h2>message</h2>

            </div>
           
            
        </div>
    )
}

export default  Sidebarchat
