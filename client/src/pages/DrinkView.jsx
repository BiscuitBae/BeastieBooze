import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import {BoozeContext} from '../boozeContext'


import ingredientParser from '../../utils/parseIng'

const DrinkView = () => {
  // useParams will grab the param passed in url. grabbing drinkId from params.
  const { drinkId } = useParams()

  // const {renderDrink, aDrink} = useContext(BoozeContext)
 
  // useEffect(() => {
  //   if (aDrink && aDrink.idDrink != drinkId) {
  //     renderDrink(drinkId)
  //   }
  // }, [])

 
//? Here we want to disgard the state and axios call in this component and pass that responsibility to 
//? context, as with the above commented out code. The problem there is that data isn't persisting 
//? after refreshing DrinkView page currently. When we figure that out we'll switch back to using context 

  const [aDrink, setADrink] = useState({})

   useEffect(() => {
    axios.get(`/routes/drink/${drinkId}`)
    .then(( { data }) => {
    setADrink(data.drinks[0])
    })
    .catch((err) => console.error('THIS IS OUR ERROR!', err, drinkId))
  }, [])

  // the ingredients and measurements come in a pretty weird format, so we wrote a helper function
  // to parse through it and return them in an array of arrays, formatted like dis:  [ingredient, measurement]
  const ingredients = ingredientParser(aDrink);

  // grab what we need from drink object, reassign names for clarity and brevity 
  const { 
    idDrink: id, 
    strDrink: name, 
    strDrinkThumb: thumbnail,
    strAlcoholic: alcoholic,
    strGlass: glass,
    strInstructions: directions, 
  } = aDrink;
  

  return (
    <div className="container">
      <h2 className="page-heading">{name}</h2>
      <div className="row">
        <div className="col-md-8">
          <img src={thumbnail} className="img-fluid drink-display" alt={name} />
        </div>
        <div className="col-md-4">
          <h4>{alcoholic}</h4>
          <h4>Glass: {glass}</h4>
          <hr></hr>
          <h5>Ingredients</h5>
          <ul>
            {ingredients.map((i, index) => {
              return <li key={index}>{i[1]}  {i[0]}</li>   //* each element is an array containing an ingredient followed by it's measurement
            })}
          </ul>
          <h4 className="sub-heading">Directions</h4>
          <p>{directions}</p>
          <div className='virgin-button'>
            <button type="button" className="btn btn-dark">Make Virgin</button>
          </div>
          <div className="favorite-button">
            <button type="button" className="btn btn-info">Add To Favorites</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr></hr>
          <h2 className="page-heading">Reviews</h2>
        </div>
      </div>
    </div>
  )

}

export default DrinkView