import React,{useState,useEffect} from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import {useParams} from 'react-router-dom'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './chat.css'
import db from '../firebase'
import firebase from 'firebase'
import {useStateValue} from './stateprovider'


function Chat() {
    const [input, setinput] = useState("")
   const [seed, setseed] = useState("")
   const {roomId} =useParams();
   const [roomname,setroomname]=useState("")
   const [messages, setmessages] = useState([]);
   const [{user},dispatch]=useStateValue()

  useEffect(()=> {
      if(roomId){
        db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
            setroomname(snapshot.data().name);
        });
        db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
            setmessages(snapshot.docs.map(doc => doc.data()))
        });
      }
  },[roomId])

   useEffect(()=> {
    setseed(Math.floor(Math.random()*5000))

   },[roomId])

 const Sendmessage =(e)=> {
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
        message:input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
 }

    return (
        <div className="chat">
            <div className="chatheader">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} style={{backGroundColor:"lightgrey"}}/>

                <div className='chatheaderinfo'>
                    <h3 className='chat-room-name'>{roomname}</h3>
                    <p className='chat-room-last-seen'>

                    Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p>
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
                {messages.map((message)=>(
                <p className={`chat_message ${ message.name == user.displayName && 'chat_receiver'}`}>
                <span className="chat_name">{message.name}</span>
            
                    {message.message}
                    <span className="chat_timestemp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
           
           ))}
            </div>

            <div className="chatfooter">
            <InsertEmoticonIcon  />
            
                <form onSubmit={Sendmessage}>
               
                    <input type="text" Value={input} onChange={e => setinput(e.target.value)} placeholder="type your message"/>
                    <button type="submit">Submit</button>
                </form>

               

            </div>
            
        </div>
    )
}

export default Chat
