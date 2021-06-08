import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { OwnerContex } from '../barContext'
import { UserContext } from '../userContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  barName: yup.string().required(),
  contactInformation: {
    address: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
  },
  details: {
    hoursOfOperation: yup.string().required(),
    description: yup.string().required(),
  }
})

const OwnerRegisterForm = () => {
  const { makeABar } = useContext(BarContext);
  const { userInfo } = useContext(UserContext);

  const {register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data, e) => {
    console.info(data, e);

    // send data for axios calls
    // addCreation(data)
    // makeADrink(data);
    // e.target.reset();
  };

  return (
    <div className='form-group'>
      <h1 className="page-heading" style={{paddingBottom: '0px'}}>Create your business</h1>
      <form className='input-form ' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='create-form-heading'>Name Your Business</h4>
        <input className="form-control" {...register("barName")} placeholder={
          `Fat Tuesday`}/>
        {errors.barName?.message ? <p className='required'>*{errors.barName?.message}</p> : null}
        <h2 className="page-heading" style={{paddingBottom: '0px'}}>Contact Information</h2>
        <h4 className='create-form-heading'>Address</h4>
        <textarea className='form-control' rows='3' {...register('address')} placeholder={
          `633 Bourbon St\nNew Orleans, LA\n70130`} />
        {errors.address?.message ? <p className='required'>*{errors.address?.message}</p> : null}
        <h4 className='create-form-heading'>Phone</h4>
        <input type='tel' className="form-control"{...register("phone")} placeholder="(504) 524-9504" />
        {errors.phone?.message ? <p className='required'>*{errors.phone?.message}</p> : null}
        <h4 className='create-form-heading'>Email</h4>
        <input type="email" className="form-control"{...register("email")} placeholder="(504) 524-9504" />
        {errors.email?.message ? <p className='required'>*{errors.email?.message}</p> : null}
        <h2 className="page-heading" style={{paddingBottom: '0px'}}>Other Details</h2>
        <h4 className='create-form-heading'>Hours of Operation</h4>
        <textarea className='form-control' rows='5' {...register('hoursOfOperation')} placeholder={
          `Monday - Thursday: 11am - midnight\nFriday-Saturrday: 10am-2am\nSunday: 10am-midnight`} />
        {errors.hoursOfOperation?.message ? <p className='required'>*{errors.hoursOfOperation?.message}</p> : null}
        <h4 className='create-form-heading'>Description</h4>
        <textarea className='form-control' rows='4' {...register('description')} placeholder={
          `The Best Party in Town. Any Town.\nEverywhere else it’s just a Tuesday. Want in?`} />
        {errors.description?.message ? <p className='required'>*{errors.description?.message}</p> : null}
        <div className='create-button'>
        <button className="btn btn-dark" type="submit"> Submit </button>
        </div>
      </form>
    </div>
  )
}

export default OwnerRegisterForm;
