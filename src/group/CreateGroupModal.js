import React from 'react'
import { Modal, Button, Icon, Header, Container, Message, Form } from 'semantic-ui-react'
import fetch from '../fetchWrapper'

const groupAddSuccessMsg = (
    <Message positive style={{maxWidth: 400}}>
      <Message.Header>Group created successfully.</Message.Header>
    </Message>
  )
  const groupAddFailureMsg = (
    <Message negative style={{maxWidth: 400}}>
      <Message.Header>Group was unable to be created.</Message.Header>
    </Message>
  )

class CreateGroupModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupName: '',
      contains: '',
      groupAddStatus: 0 // TODO: Use enum
    }
  }

  componentDidMount() {
    
  }

  handleContainsChange = (e, {value}) => {
    this.setState({contains: value})
  }
  handlePageChange = (e, {value}) => this.setState({page: value})

  handleClickCreate = (e, name) => {
    fetch(`/group`, {
      method: 'POST',
      body: JSON.stringify({name: this.state.groupName}),
      headers: {'content-type': 'application/json'}
    }).then(resp => {
      if (resp.ok) {
        this.setState({groupAddStatus: 1})
      } else {
        this.setState({groupAddStatus: -1})
      }
    })
  }

  handleChange = (e, {value}) => {
    this.setState({groupName: value})
  }

  render() {
    const button = (
      <Button fluid size='tiny' basic color='green' >
        <Icon.Group size='large'>
          <Icon name='users' />
          <Icon corner name='add' />
        </Icon.Group>&nbsp;
        Create group
      </Button>
    )

    return (
      <Modal size='small' trigger={button} closeIcon>
        <Header>
          <Icon.Group>
            <Icon name='users' />
            <Icon corner name='add' />
          </Icon.Group>&nbsp;
          Create a group
        </Header>
        <Modal.Content>
          <Container textAlign='center'>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder='New group name'
                        name='groupName'
                        value={this.state.groupName}
                        onChange={this.handleChange}
                    />
                    <Form.Button
                        content='Submit'
                        onClick={this.handleClickCreate}
                    />
                </Form.Group>
            </Form>
            {this.state.groupAddStatus === 1 ? groupAddSuccessMsg : ''}
            {this.state.groupAddStatus === -1 ? groupAddFailureMsg : ''}
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

export default CreateGroupModal