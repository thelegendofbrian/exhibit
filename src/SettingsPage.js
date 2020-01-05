import React from 'react';
import MainMenu from './MainMenu'
import { Icon, Header, Container, Form, Input, Dropdown, Button, Divider, Message, Radio } from 'semantic-ui-react';
import fetch from './fetchWrapper'

const timeZoneOptions = [
  {key: 'America/Los_Angeles', text: 'America/Los Angeles', value: 'America/Los_Angeles'},
  {key: 'America/Chicago', text: 'America/Chicago', value: 'America/Chicago'},
  {key: 'Etc/GMT-12', text: 'GMT-12', value: 'Etc/GMT-12'},
  {key: 'Etc/GMT-11', text: 'GMT-11', value: 'Etc/GMT-11'},
  {key: 'Etc/GMT-10', text: 'GMT-10', value: 'Etc/GMT-10'},
  {key: 'Etc/GMT-9', text: 'GMT-9', value: 'Etc/GMT-9'},
  {key: 'Etc/GMT-8', text: 'GMT-8', value: 'Etc/GMT-8'},
  {key: 'Etc/GMT-7', text: 'GMT-7', value: 'Etc/GMT-7'},
  {key: 'Etc/GMT-6', text: 'GMT-6', value: 'Etc/GMT-6'},
  {key: 'Etc/GMT-5', text: 'GMT-5', value: 'Etc/GMT-5'},
  {key: 'Etc/GMT-4', text: 'GMT-4', value: 'Etc/GMT-4'},
  {key: 'Etc/GMT-3', text: 'GMT-3', value: 'Etc/GMT-3'},
  {key: 'Etc/GMT-2', text: 'GMT-2', value: 'Etc/GMT-2'},
  {key: 'Etc/GMT-1', text: 'GMT-1', value: 'Etc/GMT-1'},
  {key: 'Etc/GMT+0', text: 'GMT+0', value: 'Etc/GMT+0'},
  {key: 'Etc/GMT+1', text: 'GMT+1', value: 'Etc/GMT+1'},
  {key: 'Etc/GMT+2', text: 'GMT+2', value: 'Etc/GMT+2'},
  {key: 'Etc/GMT+3', text: 'GMT+3', value: 'Etc/GMT+3'},
  {key: 'Etc/GMT+4', text: 'GMT+4', value: 'Etc/GMT+4'},
  {key: 'Etc/GMT+5', text: 'GMT+5', value: 'Etc/GMT+5'},
  {key: 'Etc/GMT+6', text: 'GMT+6', value: 'Etc/GMT+6'},
  {key: 'Etc/GMT+7', text: 'GMT+7', value: 'Etc/GMT+7'},
  {key: 'Etc/GMT+8', text: 'GMT+8', value: 'Etc/GMT+8'},
  {key: 'Etc/GMT+9', text: 'GMT+9', value: 'Etc/GMT+9'},
  {key: 'Etc/GMT+10', text: 'GMT+10', value: 'Etc/GMT+10'},
  {key: 'Etc/GMT+11', text: 'GMT+11', value: 'Etc/GMT+11'},
  {key: 'Etc/GMT+12', text: 'GMT+12', value: 'Etc/GMT+12'}
]

const settingsSubmitSuccessMsg = (
  <Message positive style={{maxWidth: 400}}>
    <Message.Header>Settings applied.</Message.Header>
  </Message>
)
const settingsSubmitFailureMsg = (
  <Message negative style={{maxWidth: 400}}>
    <Message.Header>Settings were unable to be applied.</Message.Header>
  </Message>
)
const passwordSubmitSuccessMsg = (
  <Message positive style={{maxWidth: 400}}>
    <Message.Header>Password changed.</Message.Header>
  </Message>
)
const passwordSubmitFailureMsg = (
  <Message negative style={{maxWidth: 400}}>
    <Message.Header>Password unable to be changed.</Message.Header>
  </Message>
)
const passwordSubmitNotMatchMsg = (
  <Message negative style={{maxWidth: 400}}>
    <Message.Header>Passwords do not match.</Message.Header>
  </Message>
)

class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
      displayName: '',
      defaultGroupId: '',
      timeZone: '',
      startOfWeek: '',
      settingsSubmitStatus: 0,
      passwordSubmitStatus: 0
    }
  }

  componentDidMount() {
    // Populate setting states
    fetch(`/user/settings`, {
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
        this.setState({
          displayName: resp.displayName,
          defaultGroupId: resp.defaultGroupId,
          timeZone: resp.timeZone,
          startOfWeek: resp.startOfWeek
        })
      }
    })

    // Populate groups
    fetch(`/member/group`, {
      method: 'GET'
    }).then(resp => {
      if (resp.ok) {
        if (resp.status === 200) {
          return resp.json();
        }
      } else {
        alert('bad');
      }
    }).then(resp => {
      if (resp) {
        this.setState({ groups: resp.groups });
      }
    })
  }

  handleDisplayNameChange = (e, {value}) => this.setState({displayName: value})
  handleDefaultGroupIdChange = (e, {value}) => this.setState({defaultGroupId: value})
  handleTimeZoneChange = (e, {value}) => this.setState({timeZone: value})
  handleStartOfWeekChange = (e, {value}) => this.setState({startOfWeek: value})

  handlePassword1Change = (e, {value}) => this.setState({password1: value})
  handlePassword2Change = (e, {value}) => this.setState({password2: value})

  applySettings = () => {
    let settings = {
      timeZone: this.state.timeZone,
      defaultGroupId: this.state.defaultGroupId,
      displayName: this.state.displayName,
      startOfWeek: this.state.startOfWeek
    }

    fetch(`/user/settings`, {
      method: 'POST',
      body: JSON.stringify(settings),
      headers: {'content-type': 'application/json'}
    }).then(resp => {
      if (resp.ok) {
        this.setState({ settingsSubmitStatus: 1 })
      } else {
        this.setState({ settingsSubmitStatus: -1 })
      }
    })
  }

  submitNewPassword = () => {
    if (this.state.password1 === this.state.password2) {
      let password = {
        newPassword: this.state.password1
      }

      fetch(`/user/account`, {
        method: 'POST',
        body: JSON.stringify(password),
        headers: {'content-type': 'application/json'}
      }).then(resp => {
        if (resp.ok) {
          this.setState({ passwordSubmitStatus: 1 })
        } else {
          this.setState({ passwordSubmitStatus: -1 })
        }
      })
    } else {
      this.setState({ passwordSubmitStatus: -2 })
    }
  }

  generateGroupsOptions = () => {
    let options = []
    this.state.groups.forEach(group => {
      options.push({key: group.id, text: group.name, value: group.id })
    })
    return options
  }

  render() {
    let groupsOptions = this.generateGroupsOptions()
    return (
      <>
        <MainMenu
          onPageChange={this.props.onPageChange}
          onUserChange={this.props.onUserChange}
          activePage={this.props.activePage}
        />
        <Header as='h2' icon textAlign='center'>
          <Icon name='settings' />
          Settings
        </Header>
        <Container text>
          <Form onSubmit={this.applySettings}>
            <Form.Field>
              <label>Display Name</label>
              <Input fluid
                placeholder='Enter a display name'
                style={{maxWidth: 400}}
                defaultValue={this.state.displayName}
                onChange={this.handleDisplayNameChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Time zone</label>
              <Dropdown fluid search selection
                placeholder='Select a time zone'
                options={timeZoneOptions} 
                style={{maxWidth: 400}}
                value={this.state.timeZone}
                onChange={this.handleTimeZoneChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Default group</label>
              <Dropdown fluid search selection
                placeholder='Select a default group'
                options={groupsOptions}
                style={{maxWidth: 400}}
                value={this.state.defaultGroupId}
                onChange={this.handleDefaultGroupIdChange}
              />
            </Form.Field>
            <Form.Field style={{marginBottom: 7}}>
              <label>Week start day</label>
              <Radio
                label='Monday'
                name='monday'
                value='1'
                checked={this.state.startOfWeek == 1}
                onChange={this.handleStartOfWeekChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Sunday'
                name='sunday'
                value='7'
                checked={this.state.startOfWeek == 7}
                onChange={this.handleStartOfWeekChange}
              />
            </Form.Field>
            <Button type='submit' content='Apply settings' primary />
            {this.state.settingsSubmitStatus === 1 ? settingsSubmitSuccessMsg : ''}
            {this.state.settingsSubmitStatus === -1 ? settingsSubmitFailureMsg : ''}
          </Form>

          <Header as='h2' content='Change password' />
          <Divider clearing />
          <Form onSubmit={this.submitNewPassword}>
            <Form.Input
              fluid
              placeholder='New password'
              type='password'
              style={{maxWidth: 400}}
              onChange={this.handlePassword1Change}
            />
            <Form.Input
              fluid
              placeholder='Confirm new password'
              type='password'
              style={{maxWidth: 400}}
              onChange={this.handlePassword2Change}
            />
            <Form.Button color='red' content='Change password' />
          </Form>
          {this.state.passwordSubmitStatus === 1 ? passwordSubmitSuccessMsg : ''}
          {this.state.passwordSubmitStatus === -1 ? passwordSubmitFailureMsg : ''}
          {this.state.passwordSubmitStatus === -2 ? passwordSubmitNotMatchMsg : ''}
        </Container>
      </>
    )
  }
}

export default SettingsPage;