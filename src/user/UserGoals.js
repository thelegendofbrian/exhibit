import React from 'react';
import { Icon, Header, Segment, Button, Form, TextArea, Message } from 'semantic-ui-react';
import fetch from '../fetchWrapper'

class UserGoals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: '',
      newGoals: '',
      editGoals: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeGroup.id && prevProps.activeGroup.id !== this.props.activeGroup.id) {
      this.getGoals()
    }
  }

  componentDidMount() {
    if (this.props.activeGroup.id) {
      this.getGoals()
    }
  }

  /**
   * Populate goals
   */
  getGoals = () => {
    fetch(`/member/${this.props.activeGroup.id}/text/goals`, {
      method: 'GET'
    }).then(resp => {
      if (resp.ok) {
        if (resp.status === 200) {
          return resp.text()
        }
      } else {
        alert('bad')
      }
    }).then(resp => {
      if (resp) {
        this.setState({ goals: resp, newGoals: resp || '' })
      }
    })
  }

  toggleEditGoals = () => this.setState({ editGoals: !this.state.editGoals })

  handleNewGoalsChange = (e, {value}) => this.setState({newGoals: value})

  setGoals = () => {
    fetch(`/member/${this.props.activeGroup.id}/text/goals`, {
      method: 'POST',
      body: this.state.newGoals,
      headers: {'content-type': 'text/plain'}
    }).then(resp => {
      if (resp.ok) {
        this.setState({ goals: this.state.newGoals, editGoals: false })
      } else {
        alert('Error setting goals')
      }
    })
  }



  render() {
    let editIcon
    this.state.editGoals ? editIcon = 'edit outline' : editIcon = 'edit'

    let goalsDesc = (
      <Message>
        <p>
          Add notes to yourself about your goals here.
        </p>
      </Message>
    )

    let goalsDisplay = (
      <p>{this.state.goals === '' ? goalsDesc : this.state.goals}</p>
    )

    let goalsEditable = (
      <Form>
        <TextArea
          placeholder='Add notes to yourself about your goals'
          value={this.state.newGoals}
          onChange={this.handleNewGoalsChange}
        />
        <Button basic fluid
          color='green'
          type='submit'
          content='Update goals'
          onClick={this.setGoals}
          style={{marginTop: 10}}
        />
      </Form>
      
    )

    return (
      <>
        <Header as='h3' block attached='top'>
          Goal Notes
          <Button icon
            floated='right'
            style={{backgroundColor: 'transparent', marginRight: 0}}
            onClick={this.toggleEditGoals}
          >
            <Icon
              name={editIcon}
              size='small'
            />
          </Button>
        </Header>
        <Segment attached='bottom'>
          {this.state.editGoals ? goalsEditable : goalsDisplay}
        </Segment>
      </>
    )
  }
}

export default UserGoals;