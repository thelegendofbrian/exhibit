import React from 'react';
import { Grid, Segment, Form, Button, Header } from 'semantic-ui-react';
import fetch from './fetchWrapper';
import './LoginForm.css'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      triedQuickAuth: false
    };

    this.login();
  }

  login = (username, password) => {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    fetch('/login', {
      method: 'POST',
      headers: {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      body: formData
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else if(username && password) {
        alert('bad');
      } else {
        this.setState({
          triedQuickAuth: true
        });
      }
    }).then(resp => {
      if (resp) {
        this.props.onLogin(resp.user);
      }
    });
  }

  onSubmit = () => {
    this.login(this.state.username, this.state.password);
  };

  onChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    if (!this.state.triedQuickAuth) {
      return '';
    }
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' padded='vertically'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment padded>
            <Header as='h2' color='blue' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name='username'
                  onChange={this.onChange}
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                />
                <Form.Input
                  name='password'
                  onChange={this.onChange}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Button content='Login' color='blue' fluid size='large' />
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;