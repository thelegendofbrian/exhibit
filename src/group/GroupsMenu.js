import React from 'react';
import { Menu } from 'semantic-ui-react';

class GroupsMenu extends React.Component {
  render() {
    const listMenuItems = this.props.groups.map((groups) =>
      <Menu.Item
        key={groups.id}
        name={groups.name}
        active={groups.name === this.props.activeGroup.name}
        onClick={() => alert(groups.name)}
      />
    )

    return (
      <Menu vertical style={{ minHeight: '150px' }}>
        <Menu.Item>
          <Menu.Header>Groups</Menu.Header>
          <Menu.Menu>
            {listMenuItems}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

export default GroupsMenu;