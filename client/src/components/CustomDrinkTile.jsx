import React from 'react';
import { Link } from 'react-router-dom'

const CustomDrinkTile = ( { drink, imageSrc }) => {

const alcohol = drink.alcoholic ? 'alcoholic' : 'non-alcoholic'
const sampleImage = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Eucalyp-Deus_Cocktail.png'


return (
  <div className="card bg-dark justify-content-center" style={{width: '18rem'}}>
      <Link to={{
        pathname: `/custom/${drink._id}`,
        state:{ drink }
      }}>
          <img className="card-img-top custom-img" src={imageSrc} alt="sample-drink" />
          <div className="card-body text-white">
            <h5 className="card-title">{drink.name}</h5>
            <p className='card-text'>{alcohol}</p>
          </div>
        </Link>
    </div>
  )
};

export default CustomDrinkTile
