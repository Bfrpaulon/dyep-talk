import styled from 'styled-components';

const blue = '#0e59f0';
const lightBlue = '#ccdcfc';
const darkBlue = '#072e7d';
const gray = '#6d7684';
const lightGray = '#a9b7cc';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #343434;
`;



export const MessageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

export const MessageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MessageItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MessageText = styled.span`
  padding: 8px 16px;
  background-color: ${lightGray};
  color: white;
  border-radius: 20px;
  max-width: 70%;
  font-family:cursive;
  word-wrap: break-word;
  font-size: 2rem;
`;

export const MessageSender = styled.span`
  margin-left: 10px;
  color: ${gray};
  font-size: 24px;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${lightGray};
  padding: 10px;
  position: fixed;
  bottom: 0;
`;

export const InputField = styled.input`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  border: none;
  padding: 0 20px;
  font-size: 16px;
`;

export const SendButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #072e7d;
  color: #fff;
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0e59f0;
  }
`;

export const EmojiButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #072e7d;
  color: #fff;
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #0e59f0;
  }
`;