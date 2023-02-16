import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const MessageContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
`;

export const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MessageItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const MessageText = styled.span`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #888;
`;

export const MessageSender = styled.span`
  align-self: flex-end;
  margin-top: 5px;
  font-size: 12px;
  font-weight: bold;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077ff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
