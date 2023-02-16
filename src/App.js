import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ChatRoom from './ChatRoom';

function App() {
  const isLoggedIn = false; // Substitua pelo estado do login do usuário

  if (!isLoggedIn) {
    history.push('/login');
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={ChatRoom} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
