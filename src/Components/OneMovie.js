import React from 'react';


function OneMovie(props)  {
  const { backdrop_path, title, vote_average, overview } = props.movieSelect; 
  
  return(
	  <div className="one-movie">
		  <div className="showcase">		  	
		  	<img src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={title} />
		  	<div className="info">
		  		<h1>{title}</h1>
		  		<p className="rating">Rating: <span>{vote_average}</span></p>
		  		<p>{overview}</p>
		  	</div>
		  </div>	
	  </div>
  	)	  
}



export default OneMovie;