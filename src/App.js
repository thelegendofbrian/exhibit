import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './LoginForm';
import UserHome from './UserHome';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  render() {
    if (!this.state.user.name) {
      return <LoginForm onLogin={user => this.setState({ user })} />
    }
    return <UserHome />
  }
}

export default App;
