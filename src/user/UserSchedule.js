import React from 'react';
import { Header, Segment, Grid, GridColumn } from 'semantic-ui-react';
import './UserSchedule.css'

class UserSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleType: 'weekly',
      weeklySchedule: [2, 4, 7]
    }
  }

  render() {
    let scheduleHeader
    let scheduleContent

    switch (this.state.scheduleType) {
      case 'weekly':
        let daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
        let schedule = [{}, {}, {}, {}, {}, {}, {}]
        for (let i = 0; i < daysOfWeek.length; i++) {
          schedule[i].name = daysOfWeek[i];
          if (this.state.weeklySchedule.includes(i + 1)) {
            schedule[i].class = 'weeklyScheduledDay'
          }
        }
        scheduleHeader = 'Weekly Schedule'
        scheduleContent = schedule.map(day =>
          <GridColumn>
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
        break;
    }



    return (
      <>
        <Header as='h3' block attached='top'>
          {scheduleHeader}
        </Header>
        <Segment attached='bottom'>
          {scheduleContent}
        </Segment>
      </>
    )
  }
}

export default UserSchedule;