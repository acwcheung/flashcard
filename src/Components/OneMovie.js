import React from 'react';


function OneMovie( {movieSelect, cast, crew} )  {  
  const { backdrop_path, title, vote_average, tagline, overview, release_date, budget, poster_path, genres, runtime, revenue } = movieSelect;   
  
  let directorName = ''
  const director = crew.find(crew => crew.job === 'Director');
  if(!director) { return } else {directorName = director.name}
  
  const itemList = (array, key) => {
  	let newArray = [];  	
  	array.forEach(item => newArray.push(item[key]));
  	return newArray.join(', ').replace(/,$/, "");
  }

  const profileList = (array, key) => {
  	return array.map(item => {
  	  return (
  		<div className="cast-profile" key={item['cast_id']}>
	  	  <img src={`http://image.tmdb.org/t/p/w92/${item['profile_path']}`} alt={item['name']} />
	  		<p>{item['name']}</p>
	  		<p className="character">{item[key]}</p>
  		  </div>	
  		)
  	})
  }

  const castList = itemList(cast.slice(0, 5), 'name');
  const genreList = itemList(genres, 'name');
  const castProfile = profileList(cast.slice(0, 5), 'character');
  const crewProfile = profileList(crew.slice(0, 5), 'job');  
  
  return(
    <div className="one-movie">
	  <div className="showcase">		  	
	    <img src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={title} />
	    <div className="info">
	  	  <h1>{title}</h1>
	  	    <p className="rating">Rating: <span>{vote_average}</span></p>
	  	    <p>{tagline}</p>
	  	  </div>
	  </div>
	  <div className="up-section">  	    
  	    <div className="details">
  	  	  <h1>{title}</h1>
  	  	  <p>Director: {directorName}</p>
  	  	  <p>Starring: {castList}</p>
  	  	  <p>Release date: {release_date}</p>
  	  	  <p>Runtime: {runtime === 0? "Not available": `${runtime}minuites`}</p>
  	  	  <p>Revenue: {revenue === 0? "Not available": new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(revenue)}</p>
  	  	  <p>Budget: {budget === 0? "Not available": new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(budget)}</p>
  	  	  <p>Genres: {genreList}</p>
  	  	  <p>Plot:<br/>
  	  	  	{overview}
  	  	  </p>
  	    </div>
  	    <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />  	    
 	  </div>
 	  <div className="lower-section">
 	  	<h1>Top Cast</h1>
 	  	<div className="cast-container">{castProfile}</div>
 	  	<h1>Top Crew</h1>
 	  	<div className="crew-container">{crewProfile}</div>
 	  </div>
	</div>
  )	  
}



export default OneMovie;