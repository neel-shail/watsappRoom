import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data);
      setMessages(response.data);
    })
  })

  useEffect(() => {
    const pusher = new Pusher('332d8520005142f386cc', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      //alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);

  console.log(messages);


  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar />
        <Chat messages={messages}/>
      </div>
       
    </div>
  );
}

export default App;
