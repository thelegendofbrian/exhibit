import React from 'react';
import MainMenu from '../MainMenu'
import { Icon, Header, Container, Grid, Menu } from 'semantic-ui-react';
import ListSettings from './ListSettings';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuPage: 'account',
    }
  }

  handleMenuPageChange = (e, data) => {
    this.setState({menuPage: data.name})
  }

  render() {
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
        <Container>
          <Grid columns='equal'>
            <Grid.Column style={{ maxWidth: 240 }}>
              <Menu vertical>
                <Menu.Item
                  name='account'
                  content='Account'
                  onClick={this.handleMenuPageChange}
                  active={this.state.menuPage === 'account'}
                />
                <Menu.Item
                  name='group'
                  content='Group Stats'
                  onClick={this.handleMenuPageChange}
                  active={this.state.menuPage === 'groupStats'}
                />
                <Menu.Item
                  name='groupManagement'
                  content='Group Management'
                  onClick={this.handleMenuPageChange}
                  active={this.state.menuPage === 'groupManagement'}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <ListSettings page={this.state.menuPage} />
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default SettingsPage;