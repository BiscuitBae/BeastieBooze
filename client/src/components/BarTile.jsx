import React from 'react';
import { Link } from 'react-router-dom';
import ImgWrapper from './ImgWrapper';

const BarTile = ({ barObj }) => {
  console.log(barObj);
  return (
    <div className="col-md-4">
      <div className="bar-tile">
        <Link
          to={{
            pathname: `/businesses/${barObj._id}`,
            state: { barObj },
          }}
        >
          <ImgWrapper barObj={barObj} />
        </Link>
      </div>
    </div>
  );
};

export default BarTile;
