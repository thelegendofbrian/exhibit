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
  points: {
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


    let block = (
      <Statistic size='tiny'>
        <Statistic.Value>{this.props.stat.value}{statDescriptions[this.props.stat.name].unit}</Statistic.Value>
        <Statistic.Label>{statDescriptions[this.props.stat.name].label}</Statistic.Label>
      </Statistic>
    )

    let noDataBlock = (
      <Statistic size='tiny'>
        <Statistic.Value>no data</Statistic.Value>
        <Statistic.Label>{statDescriptions[this.props.stat.name].label}</Statistic.Label>
      </Statistic>
    )

    return this.props.stat.value !== null ? block : noDataBlock
  }
}

export default StatBlock;