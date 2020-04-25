import React from 'react';


function Card(props) { 
  const { poster_path, title, vote_average, id } = props.movie;  
  const movieClick = props.movieClick;
  
  return (
	<div className="card" onClick={()=>movieClick(id)}>
  	  <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
  	  <p>{title} <span>{vote_average}</span></p>  	  
 	</div>	    	    
  );
  
}

export default Card;
