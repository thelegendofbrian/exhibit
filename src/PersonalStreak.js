import React from 'react';
import { Statistic } from 'semantic-ui-react';
// import './PersonalStreak.css';

class PersonalStreak extends React.Component {
  render() {
    return (
      <Statistic size='tiny'>
        <Statistic.Value>7 day</Statistic.Value>
        <Statistic.Label>Streak</Statistic.Label>
      </Statistic>
    )
  }
}

export default PersonalStreak;