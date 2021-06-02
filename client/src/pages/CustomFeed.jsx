import React, { useContext, useEffect } from 'react';
import { BoozeContext } from'../boozeContext'

const CustomFeed = () => {

const { customDrinks, getCustomDrinks } = useContext(BoozeContext)

useEffect(() => { getCustomDrinks() }, [])
console.log('HERE ARE CUSTOM DRINKS ', customDrinks);

  return (
    <div className='page-heading'>Custom Libation Feed</div>
  )
};

export default CustomFeed