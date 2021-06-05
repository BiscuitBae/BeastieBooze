import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ingredientMap } from '../../utils/parseIng'
import { UserContext } from '../userContext'

const CustomDrinkView = () => {
  const location = useLocation();
  const { drink } = location.state;
  console.log(drink)

  const { favoriteDrinks, toggleFavorite } = useContext(UserContext);

  let { ingredients, instructions, drinkName: name, alcoholic } = drink

  console.log('Ingredients Before Parser ', ingredients)
  ingredients = ingredientMap(ingredients)
  console.log('Ingredients After Parser ', ingredients)

  const removeButton = () => {
    if(favoriteDrinks.includes(name)){
      return (
        <span className="remove-button" onClick={() => removeFavorite(aDrink)}>
            <button type="button" className="btn btn-danger" >Remove from Favorites</button>
          </span>
      )
    }
  }

  return (
    <div className="container">
      <h2 className="page-heading">{name}</h2>
      <div className="row">
        {/* <div className="col-md-8">
          <img src={thumbnail} className="img-fluid drink-display" alt={name} />
        </div> */}
        <div className="col">
          <h4>{alcoholic}</h4>
          <hr></hr>
          <h5>Ingredients</h5>
          <ul>
            {
            ingredients.map((i, index) => {
              return <li key={index}>{i[1]}  {i[0]}</li>   //* each element is an array containing an ingredient followed by it's measurement
            })
            }
          </ul>
          <h5>Directions</h5>
          <p>{instructions}</p>
          {/* <span className='drink-button create-view-button'>
            <button type="button" className="btn btn-dark">Make Virgin</button>
          </span> */}
          <span className="drink-button">
            <button type="button" className="btn btn-dark" onClick={() => {toggleFavorite(drink)}}>Add To Favorites</button>
          </span>
          { removeButton() }
        </div>
      </div>
    </div>
  )
}


export default CustomDrinkView