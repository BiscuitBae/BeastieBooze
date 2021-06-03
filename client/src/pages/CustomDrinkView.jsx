import React from 'react'
import { useLocation } from 'react-router-dom'

const CustomDrinkView = () => {
  // console.log('here is props', props)
  const location = useLocation();
  const { drink } = location.state;
  console.log(drink)
 
  return (
    <div>

    <h1 className="page-heading"> Here Be Drinks </h1>
    </div>
)


}


export default CustomDrinkView