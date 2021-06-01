import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {BoozeContext} from '../boozeContext'

const Search = () => {

  const { searchDrinks, searchResults } = useContext(BoozeContext);
  const {register, handleSubmit} = useForm();
  
  const onSubmit = data => {
    searchDrinks(data)
  };
  
  // getting search results, next step is rendering them below the form

  return (
    <div>
      <h1 className="page-heading">Let's find a drink!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4> Select By </h4>
        <select {...register("search")}>
          <option value={"name"}>Drink Name</option>
          <option value={"ingredient"}>Ingredient</option>
        </select>
        <input {...register("query")} />
        <input type="submit" />
      </form>
    </div>
    
  )
}

export default Search