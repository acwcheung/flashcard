import React from 'react';


function Navigation( {logoClick} )  {  

  return(
	  <nav className="navbar">
      <ul>
        <li className="logo" onClick={()=>logoClick('home')}><a href="#home">M</a></li>
        <li><a href="#popular">Popular</a></li>
        <li><a href="#top-rated">Top Rated</a></li>
        <li><a href="#upcoming">Upcoming</a></li>
        <li>Search</li>
      </ul>
	  	
	  </nav>

		  
	  
  	)	  
}



export default Navigation;


