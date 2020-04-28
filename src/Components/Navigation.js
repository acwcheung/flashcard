import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navigation( {logoClick, handleSearch, getSearch, movieClick } )  {
  
  const iconClick = () => {    
    const body = document.querySelector('body');
    body.classList.toggle('open');
  } 

  
  const titleImages = getSearch.map(item => {
    if(!item.poster_path) { return null }
    return (
      <img 
        key={item.id}
        src={`http://image.tmdb.org/t/p/w92/${item.poster_path}`} 
        alt={item.title} 
        onClick={() => movieClick(item.id)}
      />      
    )
  })

  return(
	  <nav className="navbar">
      <ul>
        <li className="logo" onClick={()=>logoClick('home')}><a href="#home">M</a></li>
        <li><a href="#popular">Popular</a></li>
        <li><a href="#top-rated">Top Rated</a></li>
        <li><a href="#upcoming">Upcoming</a></li>
        <li className="search">
          <FontAwesomeIcon 
            icon={faSearch} 
            size="lg" 
            onClick={iconClick} 
          />
          <input 
            type="text" 
            placeholder="Title only" 
            onChange={handleSearch}
          />
        </li>
      </ul>
      <div className="search-results">
        {titleImages}
      </div>
	  	
	  </nav>

		  
	  
  	)	  
}



export default Navigation;


