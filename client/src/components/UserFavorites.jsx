import React from 'react'
import { Link } from 'react-router-dom'

const UserFavorites = ({ favorites }) => {

  console.log(favorites)


  return (
    <ul>
      {favorites.map((drink, i) => {
       return drink.idDrink ? 
         (
          <Link to={{
            pathname: `/drink/${drink.idDrink}`,
            state: { drink }
            }}>
            <li key={i}>{drink.strDrink}</li>
          </Link>
        )
        :
        (
          <Link to={{
            pathname: `/custom/${drink.drinkName || drink.name}`,
            state: { drink }
            }}>
            <li key={i}>{drink.drinkName || drink.name}</li>
          </Link>
        )
      })}
    </ul>
  )
}

export default UserFavorites

// import React from 'react'
// import { Link } from 'react-router-dom'

// const UserFavorites = ({ favorites }) => {

//   console.log(favorites)
//   let imageSrc = imageUrlParser()


//   return (
//     <div className='container'>
//       {favorites.map((drink, i) => {
//        return drink.idDrink ? 
//          (
//           <Link to={{
//             pathname: `/drink/${drink.idDrink}`,
//             state: { drink }
//             }}>
//             <li key={i}>{drink.strDrink}</li>
//             <DrinkTile key={drink.idDrink} drink={drink} />
//           </Link>
//         )
//         :
//         (
//           <Link to={{
//             pathname: `/custom/${drink.drinkName}`,
//             state: { drink }
//             }}>
//             <li key={i}>{drink.drinkName}</li>
//           </Link>
//         )
//       })}
//     </div>
//   )
// }

// export default UserFavorites