import React, { useEffect, useContext } from 'react';
import { BarContext } from '../barContext';
import { UserContext } from '../userContext';
import BusinessDetail from './BusinessDetail.jsx';
import BarTile from '../components/BarTile';
import { v4 as getKey } from 'uuid';

const BusinessSummary = () => {
  const { verifyAge, isLegal } = useContext(UserContext);

  useEffect(() => {
    if (isLegal === null) {
      verifyAge();
    }
  }, []);
  const { bars } = useContext(BarContext);
  return isLegal ? (
    <div className="container">
      <h1 className="page-heading">Businesses</h1>
      <div className="row">
        {bars.map((barObj) => (
          // <BusinessDetail key={getKey()} barObj={barObj} />
          <BarTile key={getKey()} barObj={barObj} />
        ))}
      </div>
    </div>
  ) : (
    <h1>not legal</h1>
  );
};

export default BusinessSummary;
