import React from 'react'
import { useLocation } from 'react-router-dom'
import { ingredientMap } from '../../utils/parseIng'

const CustomDrinkView = () => {
  const location = useLocation();
  const { drink } = location.state;
  console.log(drink)

  let { ingredients, instructions, name, alcoholic } = drink


  ingredients = ingredientMap(ingredients)

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
          <h4 className="sub-heading">Directions</h4>
          <p>{instructions}</p>
          <span className='drink-button create-view-button'>
            <button type="button" className="btn btn-dark">Make Virgin</button>
          </span>
          <span className="drink-button">
            <button type="button" className="btn btn-info">Add To Favorites</button>
          </span>
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


export default CustomDrinkView