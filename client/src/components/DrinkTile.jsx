import React from 'react'

const DrinkTile = ({ drink }) => {

  const { idDrink: id, strDrink: name, strDrinkThumb: thumbnail } = drink

  return (
    <div className="drink-tile">
      <img src={thumbnail} />
      <h3>{name}</h3>
      <hr />
    </div>
  )


}

export default DrinkTile