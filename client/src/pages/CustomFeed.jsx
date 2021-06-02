import React, { useContext, useEffect } from 'react';
import { BoozeContext } from'../boozeContext'
// import CustomDrinkView from './CustomDrinkView'
import { Link } from 'react-router-dom'

const CustomFeed = () => {

const { customDrinks, getCustomDrinks } = useContext(BoozeContext)

useEffect(() => { getCustomDrinks() }, [])
console.log('HERE ARE CUSTOM DRINKS ', customDrinks);

  return (<div>
    <div className='page-heading'>Custom Libation Feed</div>
    { customDrinks.map(( drink ) => {
      return (
        <Link to={'/custom/drink'}>
          <h4>{drink.name}</h4>
          <ul>
            {Object.keys(drink.ingredients).map(ingredient => {
              return (
                <li>{ingredient}</li>
              )}
              )
              }
          </ul>
          <hr></hr>
        </Link>
      )
    }
    )}
    </div>
  )
};

export default CustomFeed

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