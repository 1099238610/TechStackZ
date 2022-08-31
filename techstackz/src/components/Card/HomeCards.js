import React from "react";
import CardItem from "./CardItem";
import "./Cards.css"

function HomeCards() {
  return (
    <div className={'cards'}>
      {/* the title of the cards */}
      <h1>Check out our SURPRISING services!</h1>
      <div className={"cards__container"}>
        <div className={"cards__wrapper"}>
          {/* config information in the card Items */}
          <ul className={"cards__items"}>
            <CardItem src={"images/home_search.png"} text={"Still confusing about different tech stacks? We have provided tons of result that you can explore."}
                      label={'Search'} path={'/techSearch'}></CardItem>
            <CardItem src={"images/home_compare.png"} text={"You may find too many tech stacks fitting for you. We can help you to pick the best."}
                      label={'Comparison'} path={'/techComparison'}></CardItem>
          </ul>
          <ul className={"cards__items"}>
            <CardItem src={"images/home_recommendation.png"} text={"Without any thought? Just a click, let us give you inspirations."}
                      label={'Recommendation'} path={'/techRecommendation'}></CardItem>
            <CardItem src={"images/developing-sign.webp"} text={"👀 Don't look at me"}
                      label={'Under developing'} path={'/'}></CardItem>
            <CardItem src={"images/developing-sign.webp"} text={"👀 Don't look at me"}
                      label={'Under developing'} path={'/'}></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeCards