import React, {useState, useEffect } from 'react'
import useHover from '../../utils/useHover'

const ImgWrapper = ({drink}) => {

  //* grabbing properties from drink object and reassigning them to less dumb variable names 
  const {
    strDrink: name,
    strDrinkThumb: thumbnail,
    strIngredient1: ingredient
  } = drink;

  //is thumbnail loaded? Use a placehholder until image fetches from API
  const [source, setSource] = useState('/images/martini.gif')
  useEffect(() => { setSource(thumbnail) }, [])

  //create hover state
  const [hoverRef, hovering] = useHover();

return ( 
  <div className="img-wrap" ref={hoverRef}>
          <img 
            className=
            // toggling classes for hover state
              {hovering ? 
                "img-fluid drink-thumb border border-secondary tint" :
                "img-fluid drink-thumb border border-secondary" 
              } 
            src={source}
            alt={name} />
            <div className= {hovering ? "wrap-text" : "wrap-text hidden"}>{name}</div>
        </div>
)
}

export default ImgWrapper;