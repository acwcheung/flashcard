import React from 'react';


function Showcase( {movies, movieClick} )  {    
  const showcase = movies.map(movie => {
  	return (
  	  <div id="home" className="image-container" key={movie.id} >
    		<img alt={movie.title} src={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} />
    		<h1 onClick={()=>movieClick(movie.id)}>{movie.title}</h1>
  	  </div>		
  	)   		
  })  
  return(
	  <div className="showcase-wrapper">
	  	{showcase}		
	  </div>

		  
	  
  	)	  
}



export default Showcase;


