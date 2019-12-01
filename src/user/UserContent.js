import React from 'react';
import CheckInButton from './CheckInButton';
import UserHeatmap from './UserHeatmap';
import UserSchedule from './UserSchedule';
import UserSummary from './UserSummary';
import { Grid } from 'semantic-ui-react';

class UserContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedIn: false,
      userStats: {
        dayStreak: {label: 'streak', value: '7', unit: ' days'},
        adherencePercent: {label: 'adherence', value: '89', unit: '%'},
        points: {label: 'points', value: '1337', unit: ''},
        bonusCheckIns: {label: 'bonus check-ins', value: '2', unit: ''},
        totalCheckIns: {label: 'total check-ins', value: '32', unit: ''}
      }
    };
  }
  
  render() {
    return (
      <>
        <UserSummary userStats={this.state.userStats} settings={this.props.settings} />

        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <CheckInButton activeGroupId={this.props.activeGroupId} />
              <UserSchedule />
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