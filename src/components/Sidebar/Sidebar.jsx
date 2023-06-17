import React from 'react'
import "./Sidebar.css";
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

function Sidebar({ userId, conversations, setReceiverId, setConversationId, setMessages }) {

  //get all the messages
  async function fetchMessages(conversationId) {
    try {
      await axios.get(`http://hypescreen.eu-4.evennode.com/messages/${conversationId}`).then(res => {
        console.log(res.data.messages);
        setMessages(res.data.messages);
      }).catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='home__sidebar'>
      <NavBar />
      {
        conversations.map((conversation) => {
          return <div className='contact__container' key={conversation._id} onClick={(e) => {

            setConversationId(conversation._id)
            setReceiverId(conversation.members.find(member => member !== userId));
            fetchMessages(conversation._id);
          }}>
            <div className='profile__details'>
              <img src={conversation.members.find(member => member.id !== userId)?.profilePicture || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg"} alt="profile" />
              <h3 className='name__and__status__container'>{conversation.name}</h3>
            </div>
          </div>
        })

      }
    </div>
  )
}

export default Sidebar;