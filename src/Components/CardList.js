import React from 'react';
import Card from './Card';

function CardList( {movies, movieClick} ) {
  const headings = ['popular', 'top-rated', 'upcoming']; 
  const movieLists = movies.map((list, i) => { 
    return (
      <div key={i}>
        <h1 id={headings[i]}>{headings[i]}</h1>    
        <div className="card-wrapper">
          <div className="arrow arrow-left" onClick={() => handleClick(`${i}a`)}>{`<`}</div> 
          <div className="card-list">
            {list.map(movie => { return (
                <Card key={movie.id} movieClick={movieClick} movie={movie} /> )})}          
          </div>
          <div className="arrow arrow-right" onClick={() => handleClick(`${i}b`)}>{`>`}</div> 
        </div>
      </div> 
    )
  })  

  let ml = [0, 0, 0];
  const handleClick = (n) => {        
    const cardLists = document.querySelectorAll('.card-list');    
    const [row, arrow] = n.split('');    
    const r = parseInt(row);    
    if(arrow === 'b' && ml[r] > -270) { ml[r] = ml[r] - 90}
      else if(arrow === 'a' && ml[r] < 0) { ml[r] = ml[r] + 90};
    cardLists[r].style.marginLeft = `${ml[r]}%`;    
  }  

  return (
    <div>
      {movieLists}  
    </div>
    
  );
}

export default CardList;



