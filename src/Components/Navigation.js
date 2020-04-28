import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navigation( {logoClick, handleSearch, imageSearch} )  {
  
  const iconClick = () => {    
    const body = document.querySelector('body');
    body.classList.toggle('open');
  } 

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
      <div className="search-wrapper">
        <div className="search-results">
          {imageSearch}
        </div>  
      </div>
      
	  	
	  </nav>

		  
	  
  	)	  
}



export default Navigation;


