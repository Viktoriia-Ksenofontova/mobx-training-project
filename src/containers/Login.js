import { Component } from 'react';

class Login extends Component {
  state = {};

  handleFormInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: [value]
    })
  };

  render() {
    const { userName = "", password = "" } = this.state;
    const { handleLogin } = this.props;

    return (
      <form onSubmit={handleLogin}>
        <label htmlFor='userName'>Name</label>
        <input
          id='userName'
          name='userName'
          type="text"
          value={userName}
          onChange={this.handleFormInput}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={this.handleFormInput}
          required
        />

        <button type="submit">Login</button>
      </form>
    )
  };

};

export default Login;