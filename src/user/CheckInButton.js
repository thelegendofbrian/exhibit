import React from 'react';
import { Button, Segment, Icon } from 'semantic-ui-react';
import fetch from '../fetchWrapper'

class CheckInButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedIn: false
    }
  }

  componentDidMount() {
    // Check if checked in already
    fetch(`/checkin/${this.props.activeGroup.name}/@me?pastDays=1`, {
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
      if (resp) {
        this.setState({ isCheckedIn: true });
      }
    });
  }

  checkIn = () => {
    fetch(`/checkin/${this.props.activeGroup.name}`, {
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
      <Segment>
        { this.state.isCheckedIn ? buttonCheckedIn : buttonNotCheckedIn }
      </Segment>
    )
  }
}

export default CheckInButton;