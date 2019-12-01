import React from 'react';
import CheckInButton from './CheckInButton';
import UserHeatmap from './UserHeatmap';
import UserSchedule from './UserSchedule';
import UserSummary from './UserSummary';
import { Grid } from 'semantic-ui-react';
import fetch from '../fetchWrapper'

class UserContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userContentSettings: {}
    };
  }

  componentDidMount() {
    // Populate userContentSettings
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