import React from 'react';
import { Input, Dropdown, Form, Header, Button, Divider } from 'semantic-ui-react';

const timeZoneOptions = [
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

class SettingsAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {
        displayName: 'Brian'
      }
    }
  }
  
  generateGroupsOptions = () => {
    let options = [];
    this.props.groups.forEach(group => {
      options.push({key: group.id, text: group.name, value: group.name})
    })
    return options
  }

  handleTimezoneChange = (e, { value }) => this.props.onSettingsChange({timezone: value})

  render() {
    let groupsOptions = this.generateGroupsOptions()
    return (
      <>
        <Form>
          <Form.Field>
            <label>Display Name</label>
            <Input fluid
              value={this.state.settings.displayName}
              placeholder='Enter a display name'
              style={{maxWidth: 400}}
            />
          </Form.Field>
          <Form.Field>
            <label>Time zone</label>
            <Dropdown fluid search selection
              placeholder='Select a time zone'
              options={timeZoneOptions} 
              style={{maxWidth: 400}}
            />
          </Form.Field>
          <Form.Field>
            <label>Default group</label>
            <Dropdown fluid search selection
              placeholder='Select a default group'
              options={groupsOptions}
              style={{maxWidth: 400}}
            />
          </Form.Field>
          <Button type='submit' content='Apply settings' primary />
        </Form>

        <Header as='h2' content='Change password' />
        <Divider clearing />
        <Form>
          <Form.Input fluid placeholder='New password' style={{maxWidth: 400}} />
          <Form.Input fluid placeholder='Confirm new password' style={{maxWidth: 400}} />
          <Form.Button color='red' content='Change password' />
        </Form>
      </>
    )
  }
}

export default SettingsAccount;