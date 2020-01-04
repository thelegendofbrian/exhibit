import React from 'react';
import { Header, Segment, Grid, GridColumn, Button, Dropdown, Icon, Label } from 'semantic-ui-react';
import './UserSchedule.css'
import fetch from '../fetchWrapper'

class UserSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
      editSchedule: false
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
        this.setState({ schedule: resp, scheduleTypeDropdown: resp.type, scheduleDays: resp.days })
      }
    })
  }

  toggleEditSchedule = () => this.setState({ editSchedule: !this.state.editSchedule })

  toggleScheduleDay = (e) => {
    let daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su']
    let tempScheduleDays = []
    for (let i = 0; i < daysOfWeek.length; i++) {
      // If button pressed corresponds to current day of week in loop
      if (e.target.innerText === daysOfWeek[i]) {
        if (!this.state.scheduleDays.includes(i+1)) {
          tempScheduleDays.push(i+1)
        }
      } else {
        if (this.state.scheduleDays.includes(i+1)) {
          tempScheduleDays.push(i+1)
        }
      }
    }
    this.setState({scheduleDays: tempScheduleDays})
  }

  setSchedule = () => {
    let tempSchedule = {
      startDate: new Date().toISOString().substring(0, 10),
      type: this.state.scheduleTypeDropdown,
      days: this.state.scheduleDays
    }
    this.setState({schedule: tempSchedule})
    fetch(`/member/${this.props.activeGroup.id}/schedule`, {
      method: 'POST',
      body: JSON.stringify(tempSchedule),
      headers: {'content-type': 'application/json'}
    }).then(resp => {
      if (resp.ok) {
        this.setState({ editSchedule: false })
      } else {
        alert('Error setting schedule')
      }
    })
  }

  handleScheduleTypeDropdownChange = (e, {value}) => this.setState({scheduleTypeDropdown: value})

  render() {
    let scheduleHeader, scheduleContent, editableScheduleContent, editScheduleType, scheduleTypeConfirmButton
    let scheduleTypeList = [
      {
        key: 'weekly',
        text: 'Weekly schedule',
        value: 'weekly'
      },
      {
        key: 'interval',
        text: 'Interval schedule',
        value: 'interval'
      },
      {
        key: 'none',
        text: 'No schedule',
        value: 'none'
      },
    ]

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

        // Editable schedule content
        schedule = [{}, {}, {}, {}, {}, {}, {}]
        for (let i = 0; i < daysOfWeek.length; i++) {
          schedule[i].name = daysOfWeek[i];
          if (this.state.scheduleDays.includes(i + 1)) {
            schedule[i].class = 'weeklyScheduledDay'
          }
        }
        editableScheduleContent = schedule.map(day =>
          <GridColumn key={'editable-' + day.name}>
            <Segment fluid as='button'
              className={day.class}
              onClick={this.toggleScheduleDay}
            >
              <Header as='h4' content={day.name}/>
            </Segment>
          </GridColumn>
        )
        editableScheduleContent = (
          <Grid columns='equal' className='weeklyScheduleColumn'>
            {editableScheduleContent}
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

    if (this.state.editSchedule) {
      editScheduleType = (
        <>
          <Label basic
            color='black'
            pointing='below'
          >
            Select a schedule type
          </Label>
          <Dropdown selection fluid
            placeholder='Select a schedule type'
            options={scheduleTypeList}
            value={this.state.scheduleTypeDropdown}
            onChange={this.handleScheduleTypeDropdownChange}
            style={{marginBottom: 10}}
          />
          <Label basic
            color='black'
            pointing='below'
          >
            Choose days in schedule
          </Label>
        </>
      )
      scheduleTypeConfirmButton = (
        <Button basic fluid
          color='green'
          type='submit'
          content='Update schedule'
          onClick={this.setSchedule}
          style={{marginTop: 10}}
        />
      )
    }

    return (
      <>
        <Header as='h3' block attached='top'>
          {scheduleHeader}
          <Button icon
            floated='right'
            style={{backgroundColor: 'transparent', marginRight: 0}}
            onClick={this.toggleEditSchedule}
          >
            <Icon
              name='setting'
              loading={this.state.editSchedule}
              style={{height: 27}}
            />
          </Button>
        </Header>
        <Segment attached='bottom'>
          {editScheduleType}
          {this.state.editSchedule ? editableScheduleContent : scheduleContent}
          {scheduleTypeConfirmButton}
        </Segment>
      </>
    )
  }
}

export default UserSchedule;