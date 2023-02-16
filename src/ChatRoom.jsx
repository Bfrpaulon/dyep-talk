import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient('http://localhost:3000');

    socketRef.current.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      socketRef.current.emit('chat message', text);
      setText('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ChatRoom;
