import React from 'react';
import StatBlock from '../StatBlock'
import { Segment, Grid, GridColumn, Header } from 'semantic-ui-react';

class UserSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const listStatBlocks = this.props.settings.userStatsToDisplay.map(stat =>
      this.props.userStats[stat]
    ).map(stat =>
        <GridColumn key={stat.label}>
          <StatBlock
            stat={stat}
          />
        </GridColumn>
    )

    return (
      <>
        <Header as='h3' block attached='top'>
          Summary
        </Header>
        <Segment attached='bottom'>
          <Grid columns='equal' textAlign='center'>
            {listStatBlocks}
          </Grid>
        </Segment>
      </>
    )
  }
}

export default UserSummary;