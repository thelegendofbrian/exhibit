import React from 'react';
import MainMenu from './MainMenu';
import GroupsMenu from './GroupsMenu';
import GroupContent from './group/GroupContent';
import UserContent from './user/UserContent';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import './StatsPage.css'
import fetch from './fetchWrapper'

class StatsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: {}
    };
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
        this.setState({
          activeGroup: resp.groups.filter(group => group.id === resp.defaultGroupId)[0]
        })
      }
    })
  }

  handleActiveGroupChange = activeGroup => this.setState({activeGroup})

  render() {
    const isGroupStats = this.props.activePage === 'groupStats'
    const header = (
      <Header as='h2' icon textAlign='center'>
        <Icon name={isGroupStats ? 'users' : 'user'} />
        {isGroupStats ? 'Group Stats' : 'User Stats'}
      </Header>
    )

    let content
    if (this.props.scope === 'group') {
      content = <GroupContent />
    } else {
      content = (
        <UserContent
          activeGroup={this.state.activeGroup}
        />
      )
    }

    return (
      <>
        <MainMenu
          activePage={this.props.activePage}
          onPageChange={this.props.onPageChange}
          onUserChange={this.props.onUserChange}
        />
        <Container className='statsPageContainer'>
          <Grid columns='equal'>
            <Grid.Column width='3'>
              <GroupsMenu
                activeGroup={this.state.activeGroup}
                onActiveGroupChange={this.handleActiveGroupChange}
              />
            </Grid.Column>
            <Grid.Column>
              {header}
              {content}
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default StatsPage;