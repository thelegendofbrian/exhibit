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
      user: {},
      activePage: 'login',
      settings: {
        userStatsToDisplay: [
          'dayStreak', 'adherencePercent', 'points'
        ]
      }
    };
  }

  handleUserChange = (user) => {
    this.setState({user});
  }

  handlePageChange = (activePage) => {
    this.setState({activePage});
  }

  getPage = () => {
    switch (this.state.activePage) {
      case 'userStats':
        return (
          <StatsPage
            scope='user'
            userName={this.state.user.userName}
            onPageChange={this.handlePageChange}
            onUserChange={this.handleUserChange}
            activePage={this.state.activePage}
            settings={this.state.settings}
          />
        )
      case 'groupStats':
        return (
          <StatsPage
            scope='group'
            userName={this.state.user.name}
            onPageChange={this.handlePageChange}
            onUserChange={this.handleUserChange}
            activePage={this.state.activePage}
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
            onLogin={user => this.setState({ user, activePage: defaultPage })}
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
