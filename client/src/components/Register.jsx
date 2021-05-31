import React from 'react'

const Register = () => {

  return (
    <div>
    <h1 className="page-heading">This is the registration page</h1>
  <form className="input-form">
    <div className="form-row">
      <div className="col-md-6">
        <label for="inputFirstName">First Name</label>
        <input type="text" class="form-control" id="inputFirstName" placeholder="" />
      </div>
    <div className="col-md-6">
      <label for="inputLastName">Last Name</label>
      <input type="text" className="form-control" id="inputLastName" placeholder="" />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6">
      <label for="inputEmail">Email</label>
      <input type="text" className="form-control" id="inputEmail" placeholder="" />
    </div>
    <div className="col-md-6">
      <label for="birthdate">Date Of Birth</label>
      <input type="text" className="form-control" id="birthdate" placeholder="" />
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6">
      <label for="passAttempt">Password</label>
      <input type="text" className="form-control" id="passAttempt" placeholder="" />
    </div>
    <div className="col-md-6">
      <label for="passConf">Confirm Password</label>
      <input type="text" className="form-control" id="passConf" placeholder="" />
    </div>
  </div>
  <div className="submit-button submit">
      <button type="button" class="btn btn-success">Register</button>
      </div>
</form>
</div>
  )
}

export default Register