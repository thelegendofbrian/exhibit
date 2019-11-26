import React from 'react';
import { Modal, Button, Icon, Header, Search, Container, Grid, Segment } from 'semantic-ui-react';

class JoinGroupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joinedGroups: [1, 2],
      groups: [
        {id: 1, name: 'Japanese', desc: 'Blah blah blah1', isPrivate: 'false'},
        {id: 2, name: 'Exercise', desc: 'Blah blah blah2', isPrivate: 'false'},
        {id: 3, name: 'Yeeting', desc: 'Blah blah blah3', isPrivate: 'false'},
        {id: 4, name: 'Neeting', desc: 'Blah blah blah4', isPrivate: 'true'}
      ]
    }
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
            <Search fluid /><br />
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