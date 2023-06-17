import React, { useState, useEffect } from 'react';
import "./Chat.css";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from 'axios';


function Chat({ user, socket, messages, setMessages, recieverId, conversationId }) {
  const [text, setText] = useState('');
  const [media, setMedia] = useState([]);

  const createMessage = () => {
    //store the message in the database
    axios.post('http://hypescreen.eu-4.evennode.com/messages/create', {
      conversationId,
      senderId: user._id,
      recieverId: recieverId,
      text: text && text,
      media: media.length > 0 && media,
    }).then((res) => {
      //log the response
      console.log(res.data);
      //fire the message event
      socket.emit('message', { ...res.data });
      //add the new message to the current messages in the state
      setMessages([...messages, res.data]);
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleMedia = (e) => {
    e.preventDefault();
    //set the media files
    setMedia(e.target.files);
  }

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }


  return (
    <div className="chat__container">
      <ScrollToBottom className={"messages__container"} horizontal>
        {
          messages && messages.map((message) => (
            <div className={message.senderId === user._id ? 'message__container right !important' : 'message__container left'} key={message._id || message.id}>
              <h3 className='message__text'>{message.text}</h3>
              <h6 className='message__date'>{new Date(message.createdAt).toLocaleTimeString()}</h6>
            </div>
          ))
        }
      </ScrollToBottom>
      <div className='create__chat__container'>
        <input className='text__message' type="text" id='text' value={text} onChange={handleText} />
        <div className='files__container'>
          <input type="file" id="images" name='images' files={media} onChange={handleMedia} />
        </div>
        <button className='send__message__btn' onClick={(e) => {
          e.preventDefault();
          createMessage();
        }}>Send</button>
      </div>
    </div>
  )
}

export default Chat;