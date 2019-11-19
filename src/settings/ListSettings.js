import React from 'react';
import { Header, Dropdown, Input, Divider, Form, Tab, Radio } from 'semantic-ui-react';

class ListSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSettings: {
        displayName: 'Brian',
        timeZone: 2,
        defaultGroup: 1,
        userStatsToDisplay: [
          {groupId: 1, stats: ['dayStreak', 'adherencePercent', 'points']},
          {groupId: 2, stats: ['dayStreak', 'adherencePercent']},
          {groupId: 3, stats: ['points', 'adherencePercent']}
        ]
      }
    }
  }

  getPageName = () => {
    switch (this.props.page) {
      case 'account':
        return 'Account Settings'
      case 'group':
        return 'Group Settings'
      case 'groupManagement':
        return 'Group Management'
      default:
        return 'Settings'
    }
  }

  // FIXME: This needs to be restructured to allow tabs for each group
  render() {
    const groupList = [
      { menuItem: 'Group 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
      { menuItem: 'Group 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Group 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    const ownedGroupList = [
      { menuItem: 'Group 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
      { menuItem: 'Group 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Group 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

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

    this.accountSettingsArray = [
      {name: 'Display name', selector: <Input fluid placeholder='Enter a display name' style={{maxWidth: 400}} />},
      {name: 'Time zone', selector: <Dropdown fluid placeholder='Select a time zone' search selection options={timeZoneOptions} style={{maxWidth: 400}} />},
      {name: 'Default group', selector: <Dropdown fluid placeholder='Select a default group' search selection options={timeZoneOptions} style={{maxWidth: 400}} />},
      {name: 'Change password', selector: (
        <Form>
          <Form.Input fluid placeholder='New password' style={{maxWidth: 400}} />
          <Form.Input fluid placeholder='Confirm new password' style={{maxWidth: 400}} />
          <Form.Button content='Change password' />
        </Form>
      )}
    ]
    
    // Settings for each group
    this.groupSettingsArray = [
      {name: '', selector: <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={groupList} /> }
    ]

    // Settings for each owned group
    this.groupManagementSettingsArray = [ //FIXME: Put into tabs
      {name: 'Group name', selector: <Input fluid placeholder='Enter the group name' style={{maxWidth: 400}} />},
      {name: 'Group description', selector: <Input fluid placeholder='Enter the group description' style={{maxWidth: 400}} />},
      {name: 'Visibility', selector: (
        <Form>
          <Form.Field>
            Choose the group visibility: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label='Public group'
              name='radioGroup'
              value='this'
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Private group'
              name='radioGroup'
              value='that'
            />
          </Form.Field>
        </Form>
      )}
    ]

    const settingsList = (
      this[this.props.page + 'SettingsArray'].map(setting =>
        <>
          <Header as='h4' content={setting.name} />
          {setting.selector}
        </>
      )
    )

    return (
      <>
        <Header as='h2'>
          {this.getPageName()}
        </Header>
        <Divider />
        {settingsList}
      </>
    )
  }
}

export default ListSettings;