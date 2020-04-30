import React from 'react';


function OneMovie( {movieSelect, cast, crew, imageRec} )  {  
  const { backdrop_path, title, vote_average, tagline, overview, release_date, budget, poster_path, genres, runtime, revenue } = movieSelect;  
  
  let directorName = '';
  const director = crew.find(crew => crew.job === 'Director');
  if(!director) { return null } else {directorName = director.name}
  
  const itemList = (array, key) => {
  	let newArray = [];
  	array.forEach(item => newArray.push(item[key]));
  	return newArray.join(', ').replace(/,$/, "");
  } 

  const profileList = (array, key) => {    
    let newArray = [];    
    let i = 0;
    while(i < 6) {      
      if(array[i] !== undefined && array[i]['profile_path']) { newArray.push(array[i]) };          
      i++;
    }
    
  	return newArray.map(item => {      
  	  return (
  		<div className="profile" key={key === 'character'? item.id: item.credit_id }>
	  	  <img src={`http://image.tmdb.org/t/p/w92${item.profile_path}`} alt={item.name} />
	  		<p>{item['name']}</p>
	  		<p className="character">{key === 'character'? `as ${item[key]}`: item[key]}</p>
  		  </div>	
  		)
  	})    
  }

  const castList = itemList(cast.slice(0, 5), 'name');
  const genreList = itemList(genres, 'name');  
  const castProfile = profileList(cast, 'character');  
  const crewProfile = profileList(crew, 'job');     
   
  return (
    <div className="one-movie">
	    {backdrop_path? 
        <div className="showcase">        
          <img src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={title} />
          <div className="info">
            <h1>{title}</h1>
              <p className="rating">Rating: <span>{vote_average === 0? "N/A": vote_average}</span></p>
              <p>{tagline}</p>
            </div>
        </div>
        : <div className="showcase"></div>   
      }      
	    <div className="up-section">  	    
  	    <div className="details">
  	  	  <h1>{title}</h1>
  	  	  <p><span>Director:</span> {directorName}</p>
  	  	  <p><span>Starring:</span> {castList}</p>
  	  	  <p><span>Release date:</span> {release_date}</p>
  	  	  <p><span>Runtime:</span> {runtime === 0? "Not available": `${runtime}minuites`}</p>
  	  	  <p><span>Revenue:</span> {revenue === 0? "Not available": new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(revenue)}</p>
  	  	  <p><span>Budget:</span> {budget === 0? "Not available": new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(budget)}</p>
  	  	  <p><span>Genres:</span> {genreList}</p>
  	  	  <p><span>Plot:</span><br/>
  	  	  	{overview}
  	  	  </p>
  	    </div>
  	    <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />  	    
 	    </div>
 	    <div className="lower-section">
 	  	  <h1>Casts</h1>
 	  	  <div className="cast-container">{castProfile}</div>
 	  	  <h1>Crews</h1>
 	  	  <div className="crew-container">{crewProfile}</div>
        <h1>Recommended Movies</h1>
        <div className="movie-rec">{imageRec}</div>
 	    </div>
	  </div>
  );	  
}



export default OneMovie;