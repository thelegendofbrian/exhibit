import React from 'react';
import { Statistic } from 'semantic-ui-react';
// import './PersonalAverage.css';

class PersonalAverage extends React.Component {
  render() {
    return (
      <Statistic size='tiny'>
        <Statistic.Value>{this.props.value}%</Statistic.Value>
        <Statistic.Label>2-week<br />Adherence</Statistic.Label>
      </Statistic>
    )
  }
}

export default PersonalAverage;