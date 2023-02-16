import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
  width: 200px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

const Button = styled.button`
  background-color: #3f51b5;
  border: none;
  color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #283593;
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implement authentication logic
  };

  return (
    <LoginPage>
      <Logo src="/path/to/logo.png" alt="Dyeptalk Logo" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Log in</Button>
      </Form>
    </LoginPage>
  );
}

export default Login;
