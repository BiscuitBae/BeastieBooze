//SearchFeed Component to render beneath Search Bar within Search.jsx
import React, { useEffect, useContext } from 'react';
import DrinkTile from '../components/DrinkTile';
import { BoozeContext } from '../boozeContext';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom';

const SearchFeed = () => {
  const { searchDrinks, searchResults } = useContext(BoozeContext);
  const { isLoggedIn } = useContext(UserContext);

  let drinkResults;
  //Rendering results or No Results depending on results of query
  if (searchResults !== '404') {
    drinkResults = searchResults.map((drink) => {
      return <DrinkTile key={drink.idDrink} drink={drink} />;
    });
  } else if (isLoggedIn) {
    return (
      <div>
        <h4 className="sub-heading"> Sorry We Found No Results </h4>
        <Link to={`/create`}>
          <button className="btn btn-dark" type="submit">
            Create One?
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h4 className="sub-heading"> Sorry We Found No Results </h4>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">{drinkResults}</div>
    </div>
  );
};

export default SearchFeed;
