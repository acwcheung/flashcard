import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faCodepen, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Footer(props) { 
  
  
  return (
	<div className="footer">
		<div className="social">
  	  		<a href="mailto:acwcheung1@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
  	  		<a href="https://twitter.com/ashley40133519" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
  	  		<a href="https://github.com/acwcheung" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
  	  		<a href="https://codepen.io/acwcheung" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCodepen} size="2x" /></a>
  	  		<a href="https://www.freecodecamp.org/fccc24840d2-377e-4a4b-a371-f225562b29ba" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFreeCodeCamp} size="2x" /></a> 	  		
  	  	</div>
		<div className="description">The backend of the site is powered by <span> </span>
		<a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
			<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" />
		</a>
		</div>  	  	
  	  	
 	</div>	    	    
  );
  
}

export default Footer;
