import React from 'react';
import { Statistic } from 'semantic-ui-react';
// import './PersonalPoints.css';

class PersonalPoints extends React.Component {
  render() {
    return (
      <Statistic size='tiny'>
        <Statistic.Value>{this.props.value}</Statistic.Value>
        <Statistic.Label>Total Points</Statistic.Label>
      </Statistic>
    )
  }
}

export default PersonalPoints;