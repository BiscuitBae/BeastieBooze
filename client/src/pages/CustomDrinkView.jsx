import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ingredientMap } from '../../utils/parseIng'
import { UserContext } from '../userContext'
import { imageUrlParser } from '../../utils/imageUrls'

const CustomDrinkView = () => {
  const location = useLocation();
  const { drink } = location.state;

  const { favoriteDrinks, toggleFavorite, removeFavorite } = useContext(UserContext);

  let { ingredients, instructions, name, alcoholic } = drink

  //
  alcoholic = alcoholic ? 'Alcoholic' : 'Non-Alcoholic';

  let imgSrc = imageUrlParser()

  ingredients = ingredientMap(ingredients);

  const removeButton = () => {
    let key = '';

    if(drink.strDrink){
      key = drink.strDrink
    } else if(drink.drinkName){
      key = drink.drinkName
    } else {
      key = drink.name
    }

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
      <h2 className="page-heading" style={{padding: '55px 0px 0px 0px'}}>{name || drink.drinkName}</h2>
      <div className="row">
        <div className='col-md-6'>
          <img src={`../${imgSrc}`} className='img-fluid custom-drink-display' alt='custom cocktail image' /> 
        </div>
        <div className="col-md-6 align-self-center custom-info">
          <h4 style={{paddingBottom: '10px'}}>{alcoholic}</h4>
          <hr></hr>
          <h5 style={{paddingBottom: '10px'}}>Ingredients</h5>
          <ul>
            {
              ingredients.map((i, index) => {
                return <li key={index}> {i[1]}  {i[0]}</li>   //* each element is an array containing an ingredient followed by it's measurement
              })
            }
          </ul>
          <br />
          <h5>Directions</h5>
          <p>{instructions}</p>
          <br></br>
          <span className="drink-button">
            <button type="button" className="btn btn-dark" onClick={() => {toggleFavorite(drink)}}>Add To Favorites</button>
          </span>
          { removeButton() }
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}


export default CustomDrinkView