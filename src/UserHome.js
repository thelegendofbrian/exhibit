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
      isCheckedIn: false
    };
  }

  checkIn = () => {
    fetch(`/checkin?timeZoneOffset=${new Date().getTimezoneOffset()}`, {
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
    return (
      <div className='App'>
        <MainMenu />
        <Container className='userHomeContent'>
          <Grid columns='equal'>
            <GridColumn width='3'>
              <LeftMenuFloat />
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
                  <GridColumn><PersonalStreak /></GridColumn>
                  <GridColumn><PersonalAverage /></GridColumn>
                  <GridColumn><PersonalPoints /></GridColumn>
                </Grid>
              </Segment>
              <Grid columns='equal'>
                <GridRow>
                  <GridColumn>
                    <Segment>
                      { !this.state.isCheckedIn &&
                        <Button content='Check-in!' onClick={this.checkIn} fluid />
                      }
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
      </div>
    )
  }
}

export default UserHome;