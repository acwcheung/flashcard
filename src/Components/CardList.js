import React from 'react';
import Card from './Card';

function CardList( {popular, topRated, upcoming, movieClick} ) { 

  const prepList = (list) => { return list.map(movie => {
      return(   
        <Card key={movie.id} movieClick={movieClick} movie={movie} />
      )
    })
  }

  const popularList = prepList(popular);
  const topRatedList = prepList(topRated);
  const upcomingList = prepList(upcoming);

  let ml1 = 0, ml2 = 0, ml3 = 0;
  const cardLists = document.querySelectorAll('.card-list');
  const handleClick = (n) => {
    console.log(n);  
    if(n === 1 || n === 2) {
      if(n === 2 && ml1 > -270) { ml1 = ml1 - 90 } 
        else if( n === 1 && ml1 < 0 ) { ml1 = ml1 + 90}
      cardLists[0].style.marginLeft = `${ml1}%`;
      }  else if(n === 3 || n === 4) {
      if(n === 4 && ml2 > -270) { ml2 = ml2 - 90 } 
        else if( n === 3 && ml2 < 0 ) { ml2 = ml2 + 90}
      cardLists[1].style.marginLeft = `${ml2}%`;
      } else if ( n === 5 || n === 6) {
      if(n === 6 && ml3 > -270) { ml3 = ml3 - 90 } 
        else if( n === 5 && ml3 < 0 ) { ml3 = ml3 + 90}
      cardLists[2].style.marginLeft = `${ml3}%`;
      }    
  }

  return (
    <div>
      <h1 id="popular">Popular</h1>    
      <div className="card-wrapper">
        <div className="arrow arrow-left" onClick={() => handleClick(1)} >
          {`<`}
        </div>
        <div className="card-list">
          {popularList} 
        </div>
        <div className="arrow arrow-right" onClick={() => handleClick(2)}>
          {`>`}
        </div>  
      </div>
      <h1 id="top-rated">Top-rated</h1>
      <div className="card-wrapper">
        <div className="arrow arrow-left" onClick={() => handleClick(3)}>
          {`<`}
        </div>
        <div className="card-list">
          {topRatedList} 
        </div>
        <div className="arrow arrow-right" onClick={() => handleClick(4)}>
          {`>`}
        </div>  
      </div>
      <h1 id="upcoming">Upcoming</h1>
      <div className="card-wrapper">
        <div className="arrow arrow-left" onClick={() => handleClick(5)}>
          {`<`}
        </div>
        <div className="card-list">
          {upcomingList} 
        </div>
        <div className="arrow arrow-right" onClick={() => handleClick(6)}>
          {`>`}
        </div>  
      </div>
    </div>
    
  );
}

export default CardList;


/*
input: three movie arrays [[{}, {}, {}....],[],[]]
movielists.map(list => {
  return (
    <div>
      { list.map(movie => {
          return(   
            <Card 
              key={movie.id}
              movieClick={movieClick} 
              movie={movie} 
            />
          )     
        })        
      }
    </div>
  )
})



output: three cardlist in html 

*/

