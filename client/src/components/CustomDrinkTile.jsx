import React from 'react';
import { Link } from 'react-router-dom'


const CustomDrinkTile = ( { drink, imageSrc }) => {

const alcohol = drink.alcoholic ? 'alcoholic' : 'non-alcoholic'


return (
  <div className="card bg-dark" style={{width: '18rem'}}>
      <Link to={{
        pathname: `/custom/${drink._id}`,
        state:{ drink }
      }}>
          <img className="card-img-top" src={imageSrc} alt="sample-drink" />
          <div className="card-body text-white">
            <h5 className="card-title">{drink.name}</h5>
            <p className='card-text'>{alcohol}</p>
          </div>
        </Link>
    </div>
  )
};

export default CustomDrinkTile
