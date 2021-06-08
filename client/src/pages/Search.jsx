import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import {BoozeContext} from '../boozeContext';
import SearchFeed from '../components/SearchFeed';
import OwnerRegisterForm from './OwnerRegisterFrom';

const Search = () => {

  const { searchDrinks, searchResults } = useContext(BoozeContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    searchDrinks(data)
    e.target.reset();
  };

  // getting search results, next step is rendering them below the form

  return (
    <div className="search-body">
      <div className="search-bar">
        <h1 className="page-heading">Let's find a drink!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className='sub-heading'> Select By </h4>
          <div className='input-group'>
            <select {...register("search")}>
              <option value={"name"}>Drink Name</option>
              <option value={"ingredient"}>Ingredient</option>
            </select>
            &nbsp;<input type='text' className='form-control' {...register("query")} />
            &nbsp;<button className="btn btn-outline-dark btn-sm" type="submit">Search</button>
          </div>
        </form>
      </div>
      <SearchFeed />
      <OwnerRegisterForm />
    </div>
  )
}

export default Search