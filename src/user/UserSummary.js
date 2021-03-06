import React from 'react';
import StatBlock from '../StatBlock'
import { Segment, Grid, GridColumn, Header, Button } from 'semantic-ui-react';
import fetch from '../fetchWrapper'

class UserSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userStats: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeGroup.id && prevProps.activeGroup.id !== this.props.activeGroup.id) {
      this.getUserStats()
    }
  }

  componentDidMount() {
    if (this.props.activeGroup.id) {
      this.getUserStats()
    }
  }

  /**
   * Populate userStats
   */
  getUserStats = () => {
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
    if (this.state.userStats !== null && this.props.userContentSettings !== null) {
      listStatBlocks = this.props.userContentSettings.stats.map(stat => (
        <GridColumn key={stat}>
          <StatBlock
            stat={{ name: stat, value: (stat === 'adherence' && this.state.userStats[stat] ? Math.round(this.state.userStats[stat] * 100) : this.state.userStats[stat]) }}
          />
        </GridColumn>
      ))
    }

    return (
      <>
        <Header as='h3' block attached='top'>
          Summary
          <Button
            floated='right'
            icon='setting'
            style={{backgroundColor: 'transparent', marginRight: 0}}
          />
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