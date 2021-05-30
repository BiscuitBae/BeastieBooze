import React from 'react'
import useHover from '../../utils/useHover'

const ImgWrapper = ({drink}) => {

   //* grabbing properties from drink object and reassigning them to less dumb variable names 
  const { 
    strDrink: name, 
    strDrinkThumb: thumbnail, 
    strIngredient1: ingredient 
    } = drink

  //create hover state
  const [hoverRef, hovering] = useHover();

return ( 
  <div className="img-wrap" ref={hoverRef}>
          <img 
            className=
              {hovering ? 
                "img-fluid drink-thumb border border-secondary tint" :
                "img-fluid drink-thumb border border-secondary" 
              } 
            src={thumbnail}
            alt={name} />
            <div className= {hovering ? "wrap-text" : "wrap-text hidden"}>{ingredient}</div>
        </div>
)
}

export default ImgWrapper