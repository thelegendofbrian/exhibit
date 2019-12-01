import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './LoginPage';
import StatsPage from './StatsPage';
import SettingsPage from './SettingsPage';

const defaultPage = 'userStats'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'login',
      user: {},
      theme: 'light',
    };
  }

  handleUserChange = user => this.setState({user})
  handlePageChange = activePage => this.setState({activePage})
  handleLogin = user => this.setState({ user, activePage: defaultPage })

  getPage = () => {
    switch (this.state.activePage) {
      case 'userStats':
        return (
          <StatsPage
            activePage={this.state.activePage}
            scope='user'
            user={this.state.user}
            onPageChange={this.handlePageChange}
            onUserChange={this.handleUserChange}
          />
        )
      case 'groupStats':
        return (
          <StatsPage
            activePage={this.state.activePage}
            scope='group'
            user={this.state.user}
            onPageChange={this.handlePageChange}
            onUserChange={this.handleUserChange}
          />
        )
      case 'settings':
        return (
          <SettingsPage
            activePage={this.state.activePage}
            user={this.state.user}
            onPageChange={this.handlePageChange}
            onUserChange={this.handleUserChange}
          />
        )
      case 'login':
      default:
        return (
          <LoginPage
            onLogin={this.handleLogin}
            onPageChange={this.handlePageChange}
          />
        )
    }
  }

  render() {
    return (
      <div className={this.state.activePage}>
        {this.getPage()}
      </div>
    )
  }
}

export default App;
