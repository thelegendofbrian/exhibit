import React from 'react';
import { Menu, Icon, Modal } from 'semantic-ui-react';
// import './MainMenu.css';

class MainMenu extends React.Component {
  handleChange = (e, data) => {
    this.props.onPageChange(data.name);
    debugger;
  }

  logout() {
    alert('Logged out')
  }

  render() {
    const logoutButton = (
      <Modal
        trigger={
          <Menu.Item name='logout'>
            <Icon name='log out' size='big' fitted />
          </Menu.Item>
        }
        header='Log out'
        content='Confirm log out.'
        size='mini'
        actions={['Cancel', { key: 'logout', content: 'Log out', negative: true, onClick: (() => this.logout()) }]}
      />
    )

    return (
      <Menu>
        <Menu.Item className='menuPadLeft' />
        <Menu.Item>
          <img alt='Logo' src='/logo.svg' />
        </Menu.Item>

        <Menu.Item
          name='userStats'
          onClick={this.handleChange}
          //active={}
        >
        <Icon name='user' size='large' />
          Personal Stats
        </Menu.Item>

        <Menu.Item
          name='groupStats'
          onClick={this.handleChange}
          //active={}
        >
          <Icon name='users' size='large' />
          Group Stats
        </Menu.Item>

        <Menu.Menu position='right' className='menuPadMiddle'>
          <Menu.Item
            name='settings'
            onClick={this.handleChange}
            //active={}
          >
            <Icon name='settings' size='big' fitted />
          </Menu.Item>

          {logoutButton}

          <Menu.Item />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MainMenu;