import React, {useContext} from 'react'
import { BarContext } from '../barContext'
import { UserContext } from '../userContext'
import axios from 'axios'
import { log } from 'async'

const BarRegisterForm = () => {
  const {
    barName,
    setBarName,
    address,
    setAddress,
    phone,
    setPhone,
    email,
    setEmail,
    hoursOfOperation,
    setHoursOfOperation,
    description,
    setDescription,
    showForm,
    toggleForm,
  } = useContext(BarContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBar = {
      name: barName,
      googleId: userInfo.googleId,
      contactInformation: {
        address,
        phone,
        email,
      },
      details: {
        hoursOfOperation,
        description,
      },
    };

    axios.post('/routes/businesses', newBar)
    .then(({ data: bizInfo }) => {
      const barId = bizInfo._id;
      setUserInfo({...userInfo, businessId: barId});
      console.log(userInfo);
    })

    // send data for axios calls
    // addCreation(data)
    // e.target.reset();
  };

  return (
    showForm ? (
      <div>
        <div>
          <div className='create-button'>
            <button className="btn btn-dark" type="button" onClick={toggleForm} > Cancel </button>
            </div>
        </div>
        <div className='form-group'>
          <h1 className="page-heading" style={{paddingBottom: '0px'}}>Create your business</h1>
          <form className='input-form ' onSubmit={handleSubmit}>
            <div>
              <h4 className='create-form-heading'>Name Your Business *</h4>
              <input
                className="form-control"
                type="text"
                placeholder="Fat Tuesday"
                name="barName"
                value={barName}
                onChange={(e) => setBarName(e.target.value)}
                required
              />
            </div>
            <div>
              <h3 className="page-heading" style={{paddingBottom: '0px'}}>Contact Information</h3>
              <h4 className='create-form-heading'>Address *</h4>
              <textarea
                className='form-control'
                rows='3'
                cols='50'
                placeholder={`633 Bourbon St\nNew Orleans, LA\n70130`}
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <h4 className='create-form-heading'>Phone *</h4>
              <input
                className="form-control"
                type='tel'
                placeholder="504-524-5185"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                value={phone}
                onChange={(e) =>setPhone(e.target.value)}
                required
              />
              <p className='text-muted'>Required Format: 555-555-5555</p>
              <h4 className='create-form-heading'>Email</h4>
              <input
                type="email"
                className="form-control"
                placeholder="help@fattuesday.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h3 className="page-heading" style={{paddingBottom: '0px'}}>Other Details</h3>
              <h4 className='create-form-heading'>Hours of Operation *</h4>
              <textarea
                className='form-control'
                rows='5'
                cols='50'
                placeholder={`Monday - Thursday: 11am - midnight\n\nFriday-Saturrday: 10am-2am\n\nSunday: 10am-midnight`}
                name='hoursOfOperation'
                value={hoursOfOperation}
                onChange={(e) => setHoursOfOperation(e.target.value)}
                required
              />
              <h4 className='create-form-heading'>Description *</h4>
              <textarea
                className='form-control'
                rows='4'
                cols='50'
                placeholder={`The Best Party in Town. Any Town.\n\nEverywhere else it’s just a Tuesday. Want in?`}
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              <h5 className='create-form-heading'>Required *</h5>
            </div>
            <div className='create-button'>
              <button className="btn btn-dark" type="submit"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    )
    : (
      <div>
          <div className='create-button'>
            <button className="btn btn-dark" type="button" onClick={toggleForm} > Register your bar </button>
          </div>
      </div>
    )
  )
}

export default BarRegisterForm;
