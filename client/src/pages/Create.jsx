import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {BoozeContext} from '../boozeContext'
import {UserContext} from '../userContext'

const Create = () => {

  const { makeADrink } = useContext(BoozeContext);
  const {userInfo} = useContext(UserContext);
  const {register, handleSubmit} = useForm();
  
  const onSubmit = data => {
    makeADrink(data);
  };
 
  return (
    <div className='form-group'>
      <h1 className="page-heading">{userInfo.name}, let's make a drink!</h1>
      <form className='input-form ' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='create-form-heading'>Name Your Drink!</h3>
        <input className="form-control" {...register("drinkName")} />
        <h3 className='create-form-heading'>What's in it?</h3>
        <textarea className='form-control' rows='3' {...register('ingredients')} placeholder={
          `Example: \n1tsp: honey \n1cup: booze`} />
        <h3 className='create-form-heading'>How do you concoct this tasty beverage?</h3>
        <textarea className='form-control' rows='3'{...register("instructions")} placeholder="Be specific!" />
        <h3 className='create-form-heading'>And is it boozy?</h3>
        <select className='form-control' {...register("alcoholic")}>
          <option value={true}>Why, yes it is</option>
          <option value={false}>It's a virgin drank</option>
        </select>
        <div className='create-button'>
        <button className="btn btn-info" type="submit"> Submit </button>
        </div>
      </form>
    </div>
    
  )
}

export default Create