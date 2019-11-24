import React from 'react';
import { Menu } from 'semantic-ui-react';
import JoinGroupModal from './JoinGroupModal';

class GroupsMenu extends React.Component {
  render() {
    let listMenuItems = Object.entries(this.props.groups).map((groups) => {
      let group = groups[1]
      return <Menu.Item
        key={group.id}
        name={group.name}
        active={group.id === this.props.activeGroupId}
        onClick={() => this.props.onActiveGroupIdChange(group.id)}
      />
    })

    return (
      <Menu vertical style={{ minHeight: '150px' }}>
        <Menu.Item>
          <Menu.Header>Groups</Menu.Header>
          <Menu.Menu>
            {listMenuItems}
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <JoinGroupModal />
        </Menu.Item>
      </Menu>
    )
  }
}

export default GroupsMenu;