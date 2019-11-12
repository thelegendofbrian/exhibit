import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
// import './MainMenu.css';

class MainMenu extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item className='menuPadLeft' />
        <Menu.Item>
          <img alt='Logo' src='/logo.svg' />
        </Menu.Item>
        <Menu.Item
          name='personalStats'
        >
          Personal Stats
        </Menu.Item>

        <Menu.Item
          name='groupStats'
        >
          Group Stats
        </Menu.Item>

        <Menu.Menu position='right' className='menuPadMiddle'>
          <Dropdown item text='Theme'>
            <Dropdown.Menu>
              <Dropdown.Item>Light</Dropdown.Item>
              <Dropdown.Item>Dark</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item
            name='settings'
          >
            Settings
          </Menu.Item>

          <Menu.Item
            name='logout'
          >
            Logout
          </Menu.Item>
          <Menu.Item />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MainMenu;