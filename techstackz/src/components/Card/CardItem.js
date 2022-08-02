import React from 'react'
import {Link} from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className='cards__item__link' to={props.path}>
          {/* config the image and lab in the cardItem */}
          <figure className={"cards__item__pic-wrap"} data-category={props.label}>
            <img src={props.src} alt={"Image"} className={"cards__item__img"}/>
          </figure>
          {/* config the text in the cardItem*/}
          <div className={"cards__item__info"}>
            <h5 className={"cards__item__text"}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem