import React from 'react';
import MainMenu from './MainMenu';
import GroupsMenu from './GroupsMenu';
import GroupContent from './group/GroupContent';
import UserContent from './user/UserContent';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import './StatsPage.css'

class StatsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroupId: 1,
      groups: {
        '1':{id: 1, name: 'Japanese'},
        '2':{id: 2, name: 'Exercise'},
        '3':{id: 3, name: 'Yeeting'}
      }
    };
  }

  handleActiveGroupIdChange = activeGroupId => {
    this.setState({activeGroupId});
  }

  getGroupName = id => {
    return this.state.groups[id]
  }  

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
          activeGroupId={this.state.activeGroupId}
          groups={this.state.groups}
          settings={this.props.settings}
        />
      )
    }

    return (
      <>
        <MainMenu
          onPageChange={this.props.onPageChange}
          onUserChange={this.props.onUserChange}
          activePage={this.props.activePage}
        />
        <Container className='statsPageContainer'>
          <Grid columns='equal'>
            <Grid.Column width='3'>
              <GroupsMenu
                onActiveGroupIdChange={this.handleActiveGroupIdChange}
                groups={this.state.groups}
                getGroupName={this.getGroupName}
                activeGroupId={this.state.activeGroupId}
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