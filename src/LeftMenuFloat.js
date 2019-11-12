import React from 'react';
import { Menu } from 'semantic-ui-react';
// import './LeftMenuFloat.css';

class LeftMenuFloat extends React.Component {
  render() {
    return (
      <Menu vertical style={{ minHeight: '150px' }}>
        <Menu.Item>
          <Menu.Header>Groups</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Japanese'
            />
            <Menu.Item
              name='Exercise'
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

export default LeftMenuFloat;