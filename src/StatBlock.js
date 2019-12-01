import React from 'react';
import { Statistic } from 'semantic-ui-react';

const statDescriptions = {
  dayStreak: {
    label: 'day streak',
    unit: ''
  },
  adherence: {
    label: 'adherence',
    unit: '%'
  },
  poitns: {
    label: 'points',
    unit: ''
  },
  bonusCheckins: {
    label: 'bonus check-ins',
    unit: ''
  },
  totalCheckins: {
    label: 'total check-ins',
    unit: ''
  }
}

class StatBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Statistic size='tiny'>
        <Statistic.Value>{this.props.stat.value}{statDescriptions[this.props.stat.name].unit}</Statistic.Value>
        <Statistic.Label>{statDescriptions[this.props.stat.name].label}</Statistic.Label>
      </Statistic>
    )
  }
}

export default StatBlock;