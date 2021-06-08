import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { BarContext } from '../barContext'
import { UserContext } from '../userContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  barName: yup.string().required(),
  contactInformation: yup.object({
    address: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string(),
  }).required(),
  details: yup.object({
    hoursOfOperation: yup.string().required(),
    description: yup.string().required(),
  }).required(),
})

const BarRegisterForm = () => {
  const { showForm, toggleForm } = useContext(BarContext);
  const { userInfo } = useContext(UserContext);

  const {register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data, e) => {
    console.info(data, e);

    // send data for axios calls
    // addCreation(data)
    // makeABar(data);
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
          <form className='input-form ' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h4 className='create-form-heading'>Name Your Business *</h4>
              <input className="form-control" {...register("barName")} placeholder={
                `Fat Tuesday`} required/>
              {errors.barName?.message ? <p className='required'>*{errors.barName?.message}</p> : null}
            </div>
            <div>
              <h3 className="page-heading" style={{paddingBottom: '0px'}}>Contact Information</h3>
              <h4 className='create-form-heading'>Address *</h4>
              <textarea className='form-control' rows='3' {...register('address')} placeholder={
                `633 Bourbon St\nNew Orleans, LA\n70130`} required />
              {errors.address?.message ? <p className='required'>*{errors.address?.message}</p> : null}
              <h4 className='create-form-heading'>Phone *</h4>
              <input type='tel' className="form-control"{...register("phone")} placeholder="(504) 524-5185" required />
              {errors.phone?.message ? <p className='required'>*{errors.phone?.message}</p> : null}
              <h4 className='create-form-heading'>Email</h4>
              <input type="email" className="form-control"{...register("email")} placeholder="help@fattuesday.com" />
              {errors.email?.message ? <p>*{errors.email?.message}</p> : null}
            </div>
            <div>
              <h3 className="page-heading" style={{paddingBottom: '0px'}}>Other Details</h3>
              <h4 className='create-form-heading'>Hours of Operation *</h4>
              <textarea className='form-control' rows='5' {...register('hoursOfOperation')} placeholder={
                `Monday - Thursday: 11am - midnight\nFriday-Saturrday: 10am-2am\nSunday: 10am-midnight`} required />
              {errors.hoursOfOperation?.message ? <p className='required'>*{errors.hoursOfOperation?.message}</p> : null}
              <h4 className='create-form-heading'>Description *</h4>
              <textarea className='form-control' rows='4' {...register('description')} placeholder={
                `The Best Party in Town. Any Town.\nEverywhere else it’s just a Tuesday. Want in?`} required />
              {errors.description?.message ? <p className='required'>*{errors.description?.message}</p> : null}
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
