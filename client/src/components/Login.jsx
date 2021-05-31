import React from 'react'

const Login = () => {

  return (
    <div>
      <h1 className="page-heading">This is the login page</h1>
      <form className="input-form">
        <div className="form-row">
          <div className="col-md-6">
            <label for="inputLogin">Login</label>
            <input type="text" class="form-control" id="inputLogin" placeholder="" />
          </div>
        <div className="col-md-6">
          <label for="inputPassword">Password</label>
          <input type="text" className="form-control" id="inputPassword" placeholder="" />
        </div>
        </div>
        <div className="submit-button submit">
      <button type="button" class="btn btn-success">Register</button>
      </div>
      </form>
  </div>
  )
}

export default Login