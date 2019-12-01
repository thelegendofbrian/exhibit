import React from 'react';
import { Modal, Button, Icon, Header, Container, Grid, Segment, Input } from 'semantic-ui-react';
import fetch from '../fetchWrapper'

const searchDelay = 750

class JoinGroupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      contains: '',
      page: 1,
      pageSize: 10,
      nonmemberOnly: false
    }
  }

  componentDidMount() {
    this.fetchGroups()
  }

  handleContainsChange = (e, {value}) => {
    this.setState({contains: value})
    this.delaySearchQuery()
  }
  handlePageChange = (e, {value}) => this.setState({page: value})
  handlePageSizeChange = (e, {value}) => this.setState({pageSize: value})
  handleNonmemberOnlyChange = (e, {value}) => this.setState({nonmemberOnly: value})

  delaySearchQuery = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.fetchGroups()
    }, searchDelay);
  }

  fetchGroups = () => {
    // Populate groups
    fetch(`/group?contains=${this.state.contains}&page=${this.state.page}&pageSize=${this.state.pageSize}&nonmemberOnly=${this.state.nonmemberOnly}`, {
      method: 'GET'
    }).then(resp => {
      if (resp.ok) {
        if (resp.status === 200) {
          return resp.json()
        }
      } else {
        alert('bad');
      }
    }).then(resp => {
      if (resp) {
        this.setState({groups: resp})
      }
    })
  }

  render() {
    const button = (
      <Button fluid size='tiny' basic>
        <Icon.Group size='large'>
          <Icon name='users' />
          <Icon corner name='add' />
        </Icon.Group>&nbsp;
        Join group
      </Button>
    )

    let groupsList = this.state.groups.map(group =>
      <Grid.Column key={group.id}>
        <Segment style={{ minHeight: 150 }}>
          <Header as='h4' content={group.name} />
          <p align='left'>
            {group.desc}
          </p><br />
          <Button content='Join' fluid />
        </Segment>
      </Grid.Column>
    )

    return (
      <Modal size='small' trigger={button} closeIcon>
        <Header>
          <Icon.Group>
            <Icon name='users' />
            <Icon corner name='add' />
          </Icon.Group>&nbsp;
          Join a group
        </Header>
        <Modal.Content>
          <Container textAlign='center'>
            <Input
              icon='search'
              placeholder='Search...'
              fluid
              onChange={this.handleContainsChange}
            /><br />
            <Grid columns='3' stackable>
              {groupsList}
            </Grid>
          </Container>
        </Modal.Content>
        <Modal.Actions>
          <Button>
            <Icon name='cancel' /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default JoinGroupModal;