import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {BoozeContext} from '../boozeContext'
import SearchFeed from '../components/SearchFeed'

const Search = () => {

  const { searchDrinks } = useContext(BoozeContext);
  const {register, handleSubmit} = useForm();
  
  const onSubmit = data => {
    searchDrinks(data)
  };
 
  return (
    <div className="search-body">
    <div className="search-bar">
      <h1 className="page-heading">Let's find a drink!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4> Select By </h4>
        <select {...register("searchParam")}>
          <option value={"name"}>Drink Name</option>
          <option value={"ingredient"}>Ingredient</option>
        </select>
        <input {...register("query")} />ts
        <input type="submit" />
      </form>
    </div>
    <SearchFeed />
    </div>
  )
}

export default Search