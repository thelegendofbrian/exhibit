import React from 'react';
import CheckInButton from './CheckInButton';
import UserHeatmap from './UserHeatmap';
import UserSchedule from './UserSchedule';
import UserSummary from './UserSummary';
import { Grid, Message } from 'semantic-ui-react';
import fetch from '../fetchWrapper'
import UserGoals from './UserGoals';

class UserContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userContentSettings: null
    };
  }

  componentDidUpdate(prevProps) {
    const activeGroupId = this.props.activeGroup && this.props.activeGroup.id
    const prevActiveGroupId = prevProps.activeGroup && prevProps.activeGroup.id
    if (activeGroupId !== prevActiveGroupId) {
      this.getContentSettings()
    }
  }

  componentDidMount() {
    if (this.props.activeGroup && this.props.activeGroup.id) {
      this.getContentSettings()
    }
  }

  /**
   * Populate userContentSettings
   */
  getContentSettings = () => {
    fetch(`/member/${this.props.activeGroup.id}/settings/user`, {
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
        this.setState({userContentSettings: resp})
      }
    })
  }
  
  render() {
    if (!this.props.activeGroup) {
      return (
        <Message>
          It looks like you have not joined any groups.
        </Message>
      )
    }
    return (
      <>
        <UserSummary
          userStats={this.state.userStats}
          userContentSettings={this.state.userContentSettings}
          activeGroup={this.props.activeGroup}
        />

        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <CheckInButton
                activeGroup={this.props.activeGroup}
              />
              <UserSchedule
                userContentSettings={this.state.userContentSettings}
                activeGroup={this.props.activeGroup}
              />
              <UserGoals
                activeGroup={this.props.activeGroup}
              />
            </Grid.Column>
            <Grid.Column>
              <UserHeatmap />
            </Grid.Column>
          </Grid.Row>
        </Grid>        
      </>
    )
  }
}

export default UserContent;