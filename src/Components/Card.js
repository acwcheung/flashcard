import React from 'react';


function Card(props) {
  const { id, name, email } = props.card;
  return (
    <div className="card">
  	  <img src={`https://robohash.org/${id}?200x200`} />
  	  <p>{name}</p>
  	  <p>{email}</p>        
    </div>
  );
}

export default Card;
