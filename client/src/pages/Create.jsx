import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {BoozeContext} from '../boozeContext'

const Create = () => {

  const { makeADrink } = useContext(BoozeContext);
  const {register, handleSubmit} = useForm();
  
  const onSubmit = data => {
    makeADrink(data);
  };
 
  return (
    <div className='form-group'>
      <h1 className="page-heading">Let's make a drink!</h1>
      <form className='input-form ' onSubmit={handleSubmit(onSubmit)}>
        <h2>Name Your Drink!</h2>
        <input className="form-control" {...register("drinkName")} />
        <h2>What's in it?</h2>
        <textarea className='form-control' rows='3' {...register('ingredients')} placeholder={
          `Example: \n1tsp: honey \n1cup: booze`} />
        <h2>How do you concoct this tasty beverage?</h2>
        <textarea className='form-control' rows='3'{...register("instructions")} placeholder="Be specific!" />
        <h2>And is it boozy?</h2>
        <select className='form-control' {...register("alcoholic")}>
          <option value={true}>Why, yes it is</option>
          <option value={false}>It's a virgin drank</option>
        </select>
        <button className="btn btn-info create-button" type="submit"> Submit </button>
      </form>
    </div>
    
  )
}

export default Create