import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './LoginForm';
import { Image } from 'semantic-ui-react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  render() {
    if (!this.state.user.name) {
      return <LoginForm onLogin={user => this.setState({ user })} />;
    }
    return (
      <div></div>
    );
  }
}

export default App;
