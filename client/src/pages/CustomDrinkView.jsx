import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ingredientMap } from '../../utils/parseIng'
import { UserContext } from '../userContext'
import { imageUrlParser } from '../../utils/imageUrls'

const CustomDrinkView = () => {
  const location = useLocation();
  const { drink } = location.state;
  console.log(drink)

  const { favoriteDrinks, toggleFavorite, removeFavorite } = useContext(UserContext);

  let { ingredients, instructions, name, alcoholic } = drink
  let imgSrc = imageUrlParser()
  console.log(imgSrc)

  console.log('Ingredients Before Parser ', ingredients)
  ingredients = ingredientMap(ingredients)
  console.log('Ingredients After Parser ', ingredients)

  const removeButton = () => {
    // let drinkId = drink._id || drink.idDrink
    // let key = drink.name ? drink.name : drink.drinkName;
    let key = '';

    if(drink.strDrink){
      key = drink.strDrink
    } else if(drink.drinkName){
      key = drink.drinkName
    } else {
      key = drink.name
    }
    console.log(favoriteDrinks)
    console.log(drink)
    if(favoriteDrinks.includes(key)){
      return (
        <span className="remove-button" onClick={() => removeFavorite(drink)}>
            <button type="button" className="btn btn-danger" >Remove from Favorites</button>
          </span>
      )
    }
  }
  

  return (
    <div className="container">
      <h2 className="page-heading">{name || drink.drinkName}</h2>
      <div className="row">
        <div className='col-md-6'>
          <img src={`../${imgSrc}`} className='img-fluid custom-drink-display' alt='custom cocktail image' /> 
        </div>
        <div className="col-md-6">
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