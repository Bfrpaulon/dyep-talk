import styled from 'styled-components';

export const ChatContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8f8f8;
  color: #333333;
  font-family: sans-serif;
  font-size: 16px;
`;

export const MessageContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
`;

export const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MessageItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const MessageText = styled.span`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  max-width: 60%;
  align-self: flex-start;
`;

export const MessageSender = styled.span`
  font-size: 12px;
  color: #999999;
  margin-top: 5px;
  align-self: flex-start;
`;

export const InputContainer = styled.form`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  border-top: 1px solid #e8e8e8;
`;

export const InputField = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  margin-right: 10px;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  color: #ffffff;
  background-color: #5a5a5a;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6c6c6c;
  }
`;
