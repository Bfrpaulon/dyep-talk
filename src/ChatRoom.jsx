import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import {
  ChatContainer,
  MessageContainer,
  MessageList,
  MessageItem,
  MessageText,
  MessageSender,
  InputContainer,
  InputField,
  SendButton,
  EmojiButton,
} from './ChatRoom.style';


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
        <MessageList>
          {messages.map((message, index) => (
            <MessageItem key={index}>
              <MessageText>{message}</MessageText>
              <MessageSender>You</MessageSender>
            </MessageItem>
          ))}
        </MessageList>
      </MessageContainer>
      <InputContainer onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Digite sua mensagem aqui"
        />
        <SendButton type="submit">Enviar</SendButton>
        <EmojiButton>😊</EmojiButton>
      </InputContainer>
    </ChatContainer>
  );
}

export default ChatRoom;