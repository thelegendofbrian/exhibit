import React from 'react';
import { Menu, Icon, Modal, Placeholder, Reveal } from 'semantic-ui-react';
import './MainMenu.css';

class MainMenu extends React.Component {
  handleChange = (e, data) => {
    this.props.onPageChange(data.name);
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
          onClick={this.handleChange}
          active={this.props.activePage === 'userStats'}
        >
        <Icon name='user' size='large' />
          Personal Stats
        </Menu.Item>

        <Menu.Item
          name='groupStats'
          onClick={this.handleChange}
          active={this.props.activePage === 'groupStats'}
        >
          <Icon name='users' size='large' />
          Group Stats
        </Menu.Item>

        <Menu.Menu position='right' className='menuPadMiddle'>
          <Menu.Item
            name='settings'
            onClick={this.handleChange}
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