import React from 'react';
import MainMenu from './MainMenu'

class GroupHome extends React.Component {
  render() {
    return (
      <>
        <MainMenu onPageChange={this.props.onPageChange} />
        <div>GroupHome</div>
      </>
    )
  }
}

export default GroupHome;