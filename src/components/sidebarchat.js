import React,{useState,useEffect} from 'react'
import {Avatar} from '@material-ui/core'
import './sidebarchat.css'
import db from '../firebase'
import {Link} from 'react-router-dom'

function Sidebarchat({id,name,addnewchat}) {
    const[seed ,setseed]=useState("")
    const [messages, setmessages] = useState("");
    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setmessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(()=> {
        setseed(Math.floor(Math.random()*5000))
    },[])
    const createChat =()=>{
        const roomname=prompt("enter name for chat")
        if(roomname){
            db.collection("rooms").add({
                name:roomname,
            })
            

        }

    }
    return ! addnewchat ? (
        <Link to={`/rooms/${id}`} style={{textDecoration:"none",color:"black"}}>
        <div className="sidebarchat">
            <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`} style={{objectFit:"contain",width:"50px",height:"50px"}}/>
            <div className="sidebarchat-info">
              <h2>{name}</h2>
              <p>{messages[0]?.message}</p>

            </div>
           
            
        </div>
        </Link>
     ) : (
        <div className="sidebarchat" onClick={createChat}>
             <h3 className="add-new-chat-title">Add New Chat</h3>
           
        </div>
    )
}

export default  Sidebarchat
