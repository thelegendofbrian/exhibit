import React from 'react';
import './UserHome.css'
import MainMenu from './MainMenu'
import LeftMenuFloat from './LeftMenuFloat'
import PersonalHeatmap from './PersonalHeatmap'
import PersonalStreak from './PersonalStreak'
import PersonalSchedule from './PersonalSchedule'
import PersonalAverage from './PersonalAverage'
import PersonalPoints from './PersonalPoints'
import { Grid, Container, Header, Icon, GridColumn, Segment, GridRow, Button } from 'semantic-ui-react';
import fetch from './fetchWrapper'

class UserHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isCheckedIn: false,
      group: {id: '1', name: 'Japanese'},
      stats: {
        dayStreak: '7',
        adherencePercent: '89',
        points: '1337',
        bonusCheckIns: '',
        totalCheckIns: ''
      },
      groups: [
        {id: '1', name: 'Japanese'},
        {id: '2', name: 'Exercise'},
        {id: '3', name: 'Yeeting'}
      ]
    };
  }

  componentDidMount() {
    // Check if checked in already
    fetch(`/checkin/${this.state.group.name}/@me?pastDays=1`, {
      method: 'GET'
    }).then(resp => {
      if (resp.ok) {
        if (resp.status === 200) {
          return resp.json();
        }
      } else {
        alert('bad');
      }
    }).then(resp => {
      if (resp && resp.userName === this.props.userName) {
        this.setState({ isCheckedIn: true });
      }
    });
  }

  checkIn = () => {
    fetch(`/checkin/${this.state.group.name}`, {
      method: 'POST'
    }).then(resp => {
      if (resp.ok) {
        this.setState({ isCheckedIn: true });
      } else {
        alert('bad');
      }
    });
  }

  render() {
    const buttonNotCheckedIn = <Button content='Check-in!' onClick={this.checkIn} fluid />
    const buttonCheckedIn = (
      <Segment secondary>
        <Icon name='checkmark' color='green' size='large' />
        Already checked in
      </Segment>
    )
    
    return (
      <>
        <MainMenu onPageChange={this.props.onPageChange} />
        <Container className='userHomeContent'>
          <Grid columns='equal'>
            <GridColumn width='3'>
              <LeftMenuFloat
                currentGroup={this.state.group}
                groups={this.state.groups}
              />
            </GridColumn>
            <GridColumn>
              <Header as='h2' icon textAlign='center'>
                <Icon name='user' />
                Personal Stats
              </Header>
              <Header as='h3' block attached='top'>
                Summary
              </Header>
              <Segment attached='bottom'>
                <Grid columns='equal' textAlign='center'>
                  <GridColumn><PersonalStreak value={this.state.stats.dayStreak} /></GridColumn>
                  <GridColumn><PersonalAverage value={this.state.stats.adherencePercent} /></GridColumn>
                  <GridColumn><PersonalPoints value={this.state.stats.points} /></GridColumn>
                </Grid>
              </Segment>
              <Grid columns='equal'>
                <GridRow>
                  <GridColumn>
                    <Segment>
                      { this.state.isCheckedIn ? buttonCheckedIn : buttonNotCheckedIn }
                    </Segment>
                    <Header as='h3' block attached='top'>
                      Schedule
                    </Header>
                    <Segment attached='bottom'>
                      <PersonalSchedule />
                    </Segment>
                  </GridColumn>
                  <GridColumn>
                    <Header as='h3' block attached='top'>
                      Heatmap
                    </Header>
                    <Segment attached='bottom'>
                      <PersonalHeatmap />
                    </Segment>
                  </GridColumn>
                </GridRow>
              </Grid>
            </GridColumn>
          </Grid>
        </Container>
      </>
    )
  }
}

export default UserHome;