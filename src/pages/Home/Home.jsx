import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./../../logo.svg";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Chat from "../../components/Chat/Chat";
import { useLocation } from 'react-router-dom';
import "./Home.css";

// let users = [
//   { id: 1, name: "sam", profile: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
//   { id: 2, name: "sahir", profile: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
//   { id: 3, name: "samar", profile: "https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
//   { id: 4, name: "sameer", profile: "https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
//   { id: 5, name: "John", profile: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
//   { id: 6, name: "David", profile: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
//   { id: 7, name: "Jacob", profile: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
//   { id: 8, name: "George", profile: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }
// ];


function Home({socket}) {
  const [conversations, setConversations] = useState([]);
  const [conversationId, setConversationId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [messages, setMessages] = useState([]);
  let location = useLocation();
  

  useEffect(() => {
    async function fetchData() {
      await axios({ method: 'get', url: `http://hypescreen.eu-4.evennode.com/conversations/${location.state.user._id}` }).then((res) => {
        console.dir(res.data.conversations);
        setConversations(res.data.conversations);
      }).catch((err) => {
        console.log(err);
      });
    }
    fetchData();
  },[location.state.user._id]);
  return (
    <div className='home__container'>
      <Header logo={logo} user={location.state.user} />
      <div className='main__container'>
        <Sidebar userId={location.state.user._id} conversations={conversations} setReceiverId={setReceiverId} setConversationId={setConversationId} setMessages={setMessages} />
        {
         conversationId && <Chat user={location.state.user} socket={socket} messages={messages} setMessages={setMessages} recieverId={receiverId} conversationId={conversationId} />
        }
        </div>
    </div>
  )
}

export default Home;