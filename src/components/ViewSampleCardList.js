import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

function ViewSampleCardList(props) {
  const cardListStyle = {
    padding: '20px',
  }
  if (props.cardList.length > 0) {
    return (
      <div style={cardListStyle}>
        <h1>Card List</h1>
        {props.cardList.map((card, index) => (
          <Card
            name={card.name}
            level={card.level}
            description={card.description}
            attack1={card.attack1}
            attack1Stats={card.attack1Stats}
            attack1Description={card.attack1Description}
            attack2={card.attack2}
            attack2Stats={card.attack2Stats}
            attack2Description={card.attack2Description}
            id={card.id}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div style={cardListStyle}>
        <h1>Card List</h1>
        <p>No cards yet!</p>
      </div>
    )
  }
}

ViewSampleCardList.propTypes = {
  cardList: PropTypes.array,
  onDeleteClick: PropTypes.func
}

export default ViewSampleCardList;
