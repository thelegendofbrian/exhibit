import React from 'react';
import MainMenu from './MainMenu'

class SettingsPage extends React.Component {
  render() {
    return (
      <>
        <MainMenu
          onPageChange={this.props.onPageChange}
          onUserChange={this.props.onUserChange}
          activePage={this.props.activePage}
        />
        <div>Settings</div>
      </>
    )
  }
}

export default SettingsPage;