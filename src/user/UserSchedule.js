import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

class UserSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Header as='h3' block attached='top'>
          Schedule
        </Header>
        <Segment attached='bottom'>
          <p>Every other day</p>
        </Segment>
      </>
    )
  }
}

export default UserSchedule;