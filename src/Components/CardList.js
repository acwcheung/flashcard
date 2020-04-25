import React from 'react';
import Card from './Card';


function CardList( {movies, movieClick} ) {  
  const cardList = movies.map(movie => {
  	return(  	
  	  <Card 
        key={movie.id}
        movieClick={movieClick} 
        movie={movie} 
      />
  	)  	
  })

  return (
    <div className="card-wrapper">
      <div className="arrow"></div>
      <div className="card-list">
        {cardList}
      </div>  
    </div>
    
  );
}

export default CardList;


