import React from 'react';
import { Menu } from 'semantic-ui-react';
import JoinGroupModal from './group/JoinGroupModal';
import fetch from './fetchWrapper'

class GroupsMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    // Populate groups
    fetch(`/member/group`, {
      method: 'GET'
    }).then(resp => {
      if (resp.ok) {
        if (resp.status === 200) {
          return resp.json()
        }
      } else {
        alert('bad')
      }
    }).then(resp => {
      if (resp) {
        this.setState({groups: resp.groups})
      }
    })
  }

  render() {
    let listMenuItems = this.state.groups.map((group) => {
      return (
        <Menu.Item
          key={group.id}
          name={group.name}
          active={group.id === this.props.activeGroup.id}
          onClick={() => this.props.onActiveGroupChange({id: group.id, name: group.name})}
        />
      )
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