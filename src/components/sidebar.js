import React from 'react'
import './sidebar.css'
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import Sidebarchat from './sidebarchat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar/>
                <div className="sidebar-headerright">
                    <IconButton>
                    < DonutLargeIcon />

                    </IconButton>

                    <IconButton>
                    <ChatIcon/>
                    </IconButton>

                    <IconButton>
                    <MoreVertIcon/>
                        
                    </IconButton>

                </div>

            </div>
            <div className="sidebar-search">
            <div className="sidebar-searchcontainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>

            </div>
           <div className="sidebar-chat">
               <Sidebarchat/>

           </div>

            
        </div>
    )
}

export default Sidebar
