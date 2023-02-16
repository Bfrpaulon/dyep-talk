import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #fff;
`;

const MessageContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
`;

const MessageItem = styled.div`
  margin: 8px;
  padding: 8px;
  border-radius: 4px;
  background-color: #f6f8fa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const ChatForm = styled.form`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #f6f8fa;
`;

const ChatInput = styled.input`
  flex-grow: 1;
  margin-right: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #f6f8fa;
`;

const ChatButton = styled.button`
  background-color: #0084ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient('http://localhost:3000');

    socketRef.current.on('chat message', (msg) => {
      setMessages((messages) => [...messages, msg]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      socketRef.current.emit('chat message', text);
      setText('');
    }
  };

  return (
    <ChatContainer>
      <MessageContainer>
        {messages.map((message, index) => (
          <MessageItem key={index}>{message}</MessageItem>
        ))}
      </MessageContainer>
      <ChatForm onSubmit={handleSubmit}>
        <ChatInput
          type="text"
          placeholder="Digite sua mensagem"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <ChatButton type="submit">Enviar</ChatButton>
      </ChatForm>
    </ChatContainer>
  );
}

export default ChatRoom;
