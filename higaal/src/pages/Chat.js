import {useEffect, useState}from 'react';
import io from "socket.io-client"
import "../styles/chats.css";
const socket = io("http://localhost:8000")

function Chats() {
  const[message, setMessage] = useState("");
  const [chat, setChat] = useState([])

useEffect(() => {
  socket.on("recieveMessage", (data) => {
    setChat((prev) => [...prev, data]);
  }, []);
  const sendMessage = () => {
    if(message.trim()) {
      socket.emit("sendMessage", message);
      setChat((prev) => [...prev, `You: ${message}`]);
      setMessage("")
    }
  }
  return () => socket.disconnect()
})
  return (
    <div className='chats'>
     <h1>Chat With Jambo</h1>
     <div>
     {chat.map((msg, i) => (
      <p key={i}>{msg}</p>
     ))}
     </div>

     <input
value={message}
onChange={(e) => setMessage(e.target.value)}
placeholder='Type Message'
     
     />
     <button onClick={sendMessage}
     >Send</button>
  
    </div>
  )
}

export default Chats
