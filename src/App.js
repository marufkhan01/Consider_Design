import React, { Component } from 'react';

import Frontpage from './components/frontpage';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Admin from './components/admin';

import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Frontpage />
        <SignIn />
        <SignUp />
        <Admin />

      </div>
    );
  }
}

export default App;
