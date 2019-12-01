import React from 'react';
import { Statistic } from 'semantic-ui-react';

class StatBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Statistic size='tiny'>
        <Statistic.Value>{this.props.stat.value}{this.props.stat.unit}</Statistic.Value>
        <Statistic.Label>{this.props.stat.label}</Statistic.Label>
      </Statistic>
    )
  }
}

export default StatBlock;