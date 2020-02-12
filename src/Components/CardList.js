import React from 'react';
import Card from './Card';


function CardList(props) {
  const robots = props.robots
  const cardList = robots.map(card => {
  	return(
  	//add the key to child where you generate it 	
  	  <Card key={card.id} card={card} />
  	)  	
  })

  return (
    <div className="card-list">
  	  {cardList}
    </div>
  );
}

export default CardList;
