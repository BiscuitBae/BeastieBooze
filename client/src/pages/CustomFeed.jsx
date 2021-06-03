import React, { useContext, useEffect } from 'react';
import { BoozeContext } from '../boozeContext'
// import CustomDrinkView from './CustomDrinkView'
import { Link } from 'react-router-dom'

const CustomFeed = () => {

  const { customDrinks, getCustomDrinks } = useContext(BoozeContext)

  useEffect(() => { getCustomDrinks() }, [])
  // console.log('HERE ARE CUSTOM DRINKS ', customDrinks);

let text = 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'

return (
  <div className='container'>
    <h1 className='page-heading'>User Submitted Drinks</h1>
      <div className='row'>
        <div className="card-deck">
        { customDrinks.map((drink, i) => {
          return (
            <div className="card bg-dark" style={{width: '18rem'}}key={i}>
                <div className='custom-tile'>
                  <Link to={{
                    pathname: `/custom/${drink._id}`,
                    state:{ drink }
                  }}>
                    <div className="card-body text-white">
                      <h5 className="card-title">{drink.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{drink.alcoholic}</h6>
                        {Object.keys(drink.ingredients).map((ingredient, i) => {
                          return (
                          <ul>
                            <li className='card-text' key={i}>{ingredient}</li>
                          </ul>
                        )})
                        }
                    </div>
                </Link>
            </div>
        </div>
        )})}
        </div>
      </div>
  </div >
  )
};

export default CustomFeed


// {{marginRight: spacing + 'em'}}

/**

[
{
alcoholic: true
ingredients: {Honey: "1tsp", Booze: "1cup"}
instructions: "test"
name: "test"
_id: "60b7ee7f2a0e523914a28be4"
}
]

 */