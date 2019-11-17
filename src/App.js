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
      page: 'login',
      settings: {
        userStatsToDisplay: [
          'dayStreak', 'adherencePercent', 'points'
        ]
      }
    };
  }

  handlePageChange = (page) => {
    this.setState({page});
  }

  getPage = () => {
    switch (this.state.page) {
      case 'userStats':
        return <StatsPage scope='user' userName={this.state.user.name} onPageChange={this.handlePageChange} activePage={this.state.page} settings={this.state.settings} />
      case 'groupStats':
        return <StatsPage scope='group' userName={this.state.user.name} onPageChange={this.handlePageChange} activePage={this.state.page} />
      case 'settings':
        return <SettingsPage userName={this.state.user.name} onPageChange={this.handlePageChange} activePage={this.state.page} settings={this.state.settings} />
      case 'login':
      default:
        return <LoginPage onLogin={user => this.setState({ user, page: defaultPage })} onPageChange={this.handlePageChange} />
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
