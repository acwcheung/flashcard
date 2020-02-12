import React from 'react';

function SearchBox(props) {

	//can directly use the function passed into, pass the event to it.
	//no need to build another function here
	return (
	  <div>
	    <input 
	      type='search'
	      placeholder='search robots' 
	      onChange={props.onSearch}
	    />
	  </div>
	);	
}

export default SearchBox;
