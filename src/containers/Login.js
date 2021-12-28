import { useState } from 'react';
import useSessionStorage from "../hooks/useSessionStorage";

const Login = ({ handleLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  useSessionStorage("user", { userName });

  const handleNameInputChange = e => {
    setUserName(e.target.value);
  };
  const handlePasswordInputChange = e => {
    setPassword(e.target.value);
  };

    return (
      <form onSubmit={handleLogin}>
        <label htmlFor='userName'>Name</label>
        <input
          id='userName'
          name='userName'
          type="text"
          value={userName}
          onChange={handleNameInputChange}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordInputChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    )

};

export default Login;