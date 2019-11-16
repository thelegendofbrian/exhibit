import React from 'react';
import MainMenu from './MainMenu'

class Settings extends React.Component {
  render() {
    return (
      <>
        <MainMenu onPageChange={this.props.onPageChange} />
        <div>Settings</div>
      </>
    )
  }
}

export default Settings;