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
        <Statistic.Value>{this.props.value}{this.props.unit}</Statistic.Value>
        <Statistic.Label>{this.props.label}</Statistic.Label>
      </Statistic>
    )
  }
}

export default StatBlock;