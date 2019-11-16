import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './LoginForm';
import UserHome from './UserHome';

const defaultPage = 'userHome'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      page: 'login'
    };
  }

  getPage = () => {
    switch (this.state.page) {
      case 'userHome':
        return <UserHome userName={this.state.user.name} />
      // case 'groupStats':
      //   return <GroupHome />
      // case 'settings':
      //   return <Settings />
      case 'login':
      default:
        return <LoginForm onLogin={user => this.setState({ user, page: defaultPage })} />
    }
  }

  render() {
    return (
      <div className={this.state.page}>
        {this.getPage()}
      </div>
    )
  }
}

export default App;
