import React from 'react';
import { Header, Segment, Grid, GridColumn, Button } from 'semantic-ui-react';
import './UserSchedule.css'
import fetch from '../fetchWrapper'

class UserSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeGroup.id && prevProps.activeGroup.id !== this.props.activeGroup.id) {
      this.getSchedule()
    }
  }

  componentDidMount() {
    if (this.props.activeGroup.id) {
      this.getSchedule()
    }
  }

  /**
   * Populate schedule
   */
  getSchedule = () => {
    fetch(`/member/${this.props.activeGroup.id}/schedule/projection`, {
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
        this.setState({ schedule: resp });
      }
    })
  }

  render() {
    let scheduleHeader
    let scheduleContent

    switch (this.state.schedule.type) {
      case 'weekly':
        let daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su']
        let schedule = [{}, {}, {}, {}, {}, {}, {}]
        for (let i = 0; i < daysOfWeek.length; i++) {
          schedule[i].name = daysOfWeek[i];
          if (this.state.schedule.days.includes(i + 1)) {
            schedule[i].class = 'weeklyScheduledDay'
          }
        }
        scheduleHeader = 'Weekly Schedule'
        scheduleContent = schedule.map(day =>
          <GridColumn key={day.name}>
            <Segment className={day.class}>
              <Header as='h4' content={day.name} />
            </Segment>
          </GridColumn>
        )
        scheduleContent = (
          <Grid columns='equal' className='weeklyScheduleColumn'>
            {scheduleContent}
          </Grid>
        )
        break;
      case 'interval':
          scheduleHeader = 'Interval Schedule'
        break;
      case 'none':
          scheduleHeader = 'No Schedule'
        break;
      default:
          scheduleHeader = 'Schedule'
        break;
    }



    return (
      <>
        <Header as='h3' block attached='top'>
          {scheduleHeader}
          <Button
            floated='right'
            icon='setting'
            style={{backgroundColor: 'transparent', marginRight: 0}}
          />
        </Header>
        <Segment attached='bottom'>
          {scheduleContent}
        </Segment>
      </>
    )
  }
}

export default UserSchedule;