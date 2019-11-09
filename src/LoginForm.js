import React from 'react';
import { Grid, Segment, Form, Button } from 'semantic-ui-react';
import fetch from './fetchWrapper';
import cookie from 'cookie';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    /*let auth = cookie.parse(document.cookie)['Authorization'];
    if (auth) {
      this.login(auth);
    }*/
  }

  login = (username, password) => {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    fetch('/login', {
      method: 'POST',
      body: formData
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        alert('bad');
      }
    }).then(resp => {
      this.props.onLogin(resp.user);
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
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          name='username'
          onChange={this.onChange}
        />
        <Form.Input
          type='password'
          name='password'
          onChange={this.onChange}
        />
        <Button content='button' />
      </Form>
    );
  }
}

export default LoginForm;