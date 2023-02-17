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
  height: 100vh;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${darkBlue};
  height: 80px;
  color: #fff;
  font-size: 2rem;
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
`;

export const MessageContainer = styled.div`
  overflow-y: scroll;
  flex: 1;
  padding: 20px;
`;

export const MessageList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MessageItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const MessageText = styled.p`
  background-color: ${lightBlue};
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
  max-width: 80%;
  align-self: flex-start;
  color: ${darkBlue};
  margin-right: auto;
`;

export const MessageSender = styled.span`
  font-size: 0.8rem;
  color: ${gray};
  margin-top: 5px;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  margin: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  width: calc(100% - 40px);
`;

export const InputField = styled.input`
  flex: 1;
  padding: 15px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: ${gray};
`;

export const SendButton = styled.button`
  b order: none;
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
export const EmojiSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${lightGray};
  position: absolute;
  bottom: calc(100% + 10px);
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
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
