import React from 'react';
import StatBlock from '../StatBlock'
import { Segment, Grid, GridColumn, Header } from 'semantic-ui-react';
import fetch from '../fetchWrapper'

class UserSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userStats: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.activeGroup.id || prevProps.activeGroup.id === this.props.activeGroup.id) {
      return
    }
    // Populate userStats
    fetch(`/member/${this.props.activeGroup.id}/statistics`, {
      method: 'GET'
    }).then(resp => {
      if (resp.ok) {
        if (resp.status === 200) {
          return resp.json()
        }
      } else {
        alert('bad')
      }
    }).then(resp => {
      if (resp) {
        this.setState({userStats: resp})
      }
    })
  }

  render() {
    let listStatBlocks
    if (this.state.userStats.dayStreak) {
      listStatBlocks = this.props.userContentSettings.stats.map(stat => (
        <GridColumn key={stat}>
          <StatBlock
            stat={{name: stat, value: this.state.userStats[stat]}}
          />
        </GridColumn>
      ))
    }

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