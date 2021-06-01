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
    <div>
      <h1 className="page-heading">Let's make a drink!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Name Your Drink!</h2>
        <input {...register("drinkName")} />
        <h2>What's in it?</h2>
        <textarea {...register('ingredients')} placeholder="What's in the drink?" />
        <h2>How do you concoct this tasty beverage?</h2>
        <textarea {...register("instructions")} placeholder="Be specific!" />
        <h2>And is it boozy?</h2>
        <select {...register("alcoholic")}>
          <option value={true}>Why, yes it is</option>
          <option value={false}>It's a virgin drank</option>
        </select>
        <input type="submit" />
      </form>
    </div>
    
  )
}

export default Create