import React, { useEffect, useState } from 'react';
import axios from 'axios';

//example Login component if we go this direction.

const Login = () => {

  const [ auth, setAuth ] = useState('');

  useEffect(() => {
    axios.get('/routes/login')
      .then(({ data }) => {
        console.log('this is the login data:', data);
        // setAuth(data);
      })
      .catch(err => console.log('error logging in:', err));
  }, []);

  // const [ username, setUsername ] = useState('');
  // const [ password, setPassword ] = useState('');

  return (
    <div>
      {auth}
      {/* <h1 className="page-heading">This is the login page</h1>
      <form className="input-form">
        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="inputLogin">Login</label>
            <input
              type="text"
              className="form-control"
              id="inputLogin"
              placeholder=""
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder=""
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        </div>
        <div className="submit-button submit">
      <button type="button" className="btn btn-success">Register</button>
      </div>
      </form> */}
  </div>
  )
}

export default Login