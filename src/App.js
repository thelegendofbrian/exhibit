import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './LoginForm';
import UserHome from './UserHome';
import GroupHome from './GroupHome';
import Settings from './Settings';

const defaultPage = 'userStats'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      page: 'login'
    };
  }

  handlePageChange = (page) => {
    this.setState({page});
  }

  getPage = () => {
    switch (this.state.page) {
      case 'userStats':
        return <UserHome userName={this.state.user.name} onPageChange={this.handlePageChange} />
      case 'groupStats':
        return <GroupHome userName={this.state.user.name} onPageChange={this.handlePageChange} />
      case 'settings':
        return <Settings userName={this.state.user.name} onPageChange={this.handlePageChange} />
      case 'login':
      default:
        return <LoginForm onLogin={user => this.setState({ user, page: defaultPage })} onPageChange={this.handlePageChange} />
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
