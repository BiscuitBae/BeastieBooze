import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

import { BoozeContext } from '../boozeContext';
import { UserContext } from '../userContext';

import { ingredientParser } from '../../utils/parseIng';

const DrinkView = () => {
  // useParams will grab the param passed in url. grabbing drinkId from params.
  const { drinkId } = useParams();
  const [aDrink, setADrink] = useState({});

  useEffect(() => {
    axios
      .get(`/routes/drink/${drinkId}`)
      .then(({ data }) => {
        setADrink(data.drinks[0]);
      })
      .catch((err) => console.error('THIS IS OUR ERROR!', err, drinkId));
  }, []);

  const ingredients = ingredientParser(aDrink);

  const { isLoggedIn, favoriteDrinks, toggleFavorite, removeFavorite } =
    useContext(UserContext);

  // grab what we need from drink object, reassign names
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: thumbnail,
    strAlcoholic: alcoholic,
    strGlass: glass,
    strInstructions: directions,
  } = aDrink;

  const removeFromMenu = () => {
    axios
      .delete('/routes/businesses/drink', {
        data: {
          businessId: '60bfcbe9dcf87f97054d4517', // extract from state
          drinkObj: { name, directions, ingredients, alcoholic },
        },
      })
      .then(({ data: newMenu }) => console.log(newMenu))
      .catch((err) => console.log(err));
  };

  const removeFromMenuButton = () => {
    if (true) {
      return (
        <span className="remove-from-menu-button" onClick={removeFromMenu}>
          <button type="button btn btn-primary">Remove from Menu</button>
        </span>
      );
    }
  };

  const addToMenu = () => {
    axios
      .post('/routes/businesses/drink', {
        businessId: '60bfcbe9dcf87f97054d4517', // extract from state
        drinkObj: { name, directions, ingredients, alcoholic },
      })
      .then(({ data: newMenu }) => console.log(newMenu))
      .catch((err) => console.log(err));
  };

  const addToMenuButton = () => {
    if (true) {
      return (
        <span className="add-to-menu-button" onClick={addToMenu}>
          <button type="button btn btn-primary">Add to Menu</button>
        </span>
      );
    }
  };

  const removeButton = () => {
    if (favoriteDrinks.includes(name)) {
      return (
        <span className="remove-button" onClick={() => removeFavorite(aDrink)}>
          <button type="button" className="btn btn-danger">
            Remove from Favorites
          </button>
        </span>
      );
    }
  };

  const youTube = () => {
    if (true) {
      return (
        <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
        <button className="trailer-button" onClick={()=> prepTrailer(show.media_type === 'tv' ? show.name : show.title)}>View Trailer</button>
      </React.Fragment>
      )
    }
  }

  const userButtons = () => {
    if (isLoggedIn) {
      return (
        <>
          <br></br>
          <span className="drink-button">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                toggleFavorite(aDrink);
              }}
            >
              Add To Favorites
            </button>
          </span>
          {youTube()}
          {removeButton()}
          {addToMenuButton()}
          {removeFromMenuButton()}
        </>
      );
    }
  };

  return (
    <div className="container">
      <h2 className="page-heading">{name}</h2>
      <div className="row">
        <div className="col-md-8">
          <img src={thumbnail} className="img-fluid drink-display" alt={name} />
        </div>
        <div className="col-md-4">
          <h4>{alcoholic}</h4>
          <h4>Glass: {glass}</h4>
          <hr></hr>
          <h5>Ingredients</h5>
          <ul>
            {ingredients.map((i, index) => {
              return (
                <li key={index}>
                  {i[1]} {i[0]}
                </li>
              ); //* each element is an array containing an ingredient followed by it's measurement
            })}
          </ul>
          <h5>Directions</h5>
          <p>{directions}</p>
          {userButtons()}
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default DrinkView;
