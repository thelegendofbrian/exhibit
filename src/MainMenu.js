import React from 'react';
import { Menu, Icon, Modal, Placeholder, Reveal } from 'semantic-ui-react';
import './MainMenu.css';
import fetch from './fetchWrapper'

class MainMenu extends React.Component {
  handlePageChange = (e, data) => {
    this.props.onPageChange(data.name);
  }

  changeUserToNull = () => {
    this.props.onUserChange({});
  }

  logout() {
    fetch('/logout', {method: 'GET'}).then(response => {
      this.props.onPageChange('login')
      this.changeUserToNull()
    });
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

    const exhibitIcon = (
      <Modal
        trigger={
          <Menu.Item>
          <Reveal animated='fade'>
            <Reveal.Content visible>
              <img alt='Logo' src='/logo.svg' />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Icon name='question circle' color='green' fitted style={{ fontSize: '3em' }} />
            </Reveal.Content>
          </Reveal>
          </Menu.Item>
        }
        header='About Exhibit'
        content={
          <Placeholder fluid>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        }
        size='large'
        actions={['Oh okay. Cool story.']}
      />
    )

    return (
      <Menu>
        <Menu.Item className='menuPadLeft' />

        {exhibitIcon}

        <Menu.Item
          name='userStats'
          onClick={this.handlePageChange}
          active={this.props.activePage === 'userStats'}
        >
        <Icon name='user' size='large' />
          Personal Stats
        </Menu.Item>

        <Menu.Item
          name='groupStats'
          onClick={this.handlePageChange}
          active={this.props.activePage === 'groupStats'}
        >
          <Icon name='users' size='large' />
          Group Stats
        </Menu.Item>

        <Menu.Menu position='right' className='menuPadMiddle'>
          <Menu.Item
            name='settings'
            onClick={this.handlePageChange}
            active={this.props.activePage === 'settings'}
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