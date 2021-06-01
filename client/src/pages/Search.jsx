import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {BoozeContext} from '../boozeContext'

const Search = () => {

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
        <h4> Select By </h4>
        <select {...register(searchParam)}>
          <option value={searchName}>Drink Name</option>
          <option value={searchIngredient}>Ingredient</option>
        </select>
        <input {...register("query")} />
        <input type="submit" />
      </form>
    </div>
    
  )
}

export default Search