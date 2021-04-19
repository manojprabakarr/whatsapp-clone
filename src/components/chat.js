import React from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './chat.css'

function Chat() {
    return (
        <div className="chat">
            <div className="chatheader">
                <Avatar/>

                <div className='chatheaderinfo'>
                    <h3 className='chat-room-name'>jointhejs</h3>
                    <p className='chat-room-last-seen'>Thrusday</p>
                </div>

                <div className="chatheader-right">
               
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>

            </div>


            <div className="chatbody">
                <p className="chat_recevier">
            <span className="chat_name">message</span>
            <span className="chat_timestemp">date</span></p>

            </div>

            <div className="chatfooter">
            <InsertEmoticonIcon  />
            
                <form>
               
                    <input type="text" placeholder="type your message"/>
                    <button>Submit</button>
                </form>

               

            </div>
            
        </div>
    )
}

export default Chat
