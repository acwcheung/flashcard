import React, { Component } from 'react';
import CardList from '../Components/CardList';
import OneMovie from '../Components/OneMovie';
import Showcase from '../Components/Showcase';
import Navigation from '../Components/Navigation';
import apiKey from '../api.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [],
      top_rated: [],
      upcoming: [],      
      movieSelect: {},
      route: 'home',      
      searchfield: ''    
    }    
  };

  componentDidMount() {
    const movieCategories = ['popular', 'top_rated', 'upcoming'];
    movieCategories.forEach((movieCategory, i) => {
      fetch(`https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${apiKey}&language=en-US&page=1`)  
        .then(resp => resp.json())
        .then(data => {
          if(movieCategory === 'popular') {
            this.setState({popular: data.results});            
          } else if(movieCategory === 'top_rated') {
            this.setState({top_rated: data.results});            
          } else {
            this.setState({upcoming: data.results});            
          }
      })          
    })
    window.addEventListener('scroll', this.handleScroll, true);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleSearch = (e) => {
    this.setState({
      searchfield: e.target.value
    });
  };

  movieClick = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(resp => resp.json())
      .then(movie => {        
        this.setState({
          movieSelect: movie,
          route: 'movie'          
        });    
      })        
  };

  logoClick = (route) => {
    this.setState({route: route})          
  }

  handleScroll = () => {
    let y = window.scrollY;
    const navbar = document.querySelector('.navbar');
    console.log(y);
    if(y > 535) {
      navbar.style.backgroundColor = "black";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  }


  render() {
    let moviePick;    
    const { popular, top_rated, upcoming, movieSelect, route } = this.state;
    if(popular[0] === undefined || top_rated[0] === undefined || upcoming[0] === undefined) {
      moviePick = []  
    } else {
      moviePick = [popular[2], top_rated[3], upcoming[0]]  
    }
    
    return (      
      <div>
        <Navigation           
          logoClick={this.logoClick} 
          handleScroll={this.handleScroll}
        />
        {route === 'home'?
          <div>            
            <Showcase 
              movies={moviePick}
              movieClick={this.movieClick}              
            />
            <div className="movie-category">
              <h1 id="popular">Popular</h1>
              <CardList 
                movieClick={this.movieClick}
                movies={popular}          
              />
              <h1 id="top-rated">Top-rated</h1>
              <CardList 
                movieClick={this.movieClick}
                movies={top_rated}          
              />
              <h1 id="upcoming">Upcoming</h1>
              <CardList 
                movieClick={this.movieClick}
                movies={upcoming}          
              />  
            </div>                       
          </div>
          :<div>            
            <OneMovie movieSelect={movieSelect} />
          </div>
        }
      </div>
    )
  }  
}
  


export default App;




/*
movie database

api key = 17c3fa534657a7495834bc8fb45a9c05
example: https://api.themoviedb.org/3/movie/550?api_key=17c3fa534657a7495834bc8fb45a9c05

url structure as below
- base url: https://api.themoviedb.org/3
- 3 ways to search: /search; /discover; /find
- movie method: /movie?
- api_key={}
- query=<xxx>

1. text-based search by string
https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

2. search by id
https://api.themoviedb.org/3/movie/343611?api_key={api_key}

3. poster path
base url: http://image.tmdb.org/t/p/
size: "w92", "w154", "w185", "w342", "w500", "w780", or "original"
poster_path: xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg

backdrop_path: 5BwqwxMEjeFtdknRV792Svo0K1v.jpg
https://image.tmdb.org/t/p/w1280//5BwqwxMEjeFtdknRV792Svo0K1v.jpg

*/


