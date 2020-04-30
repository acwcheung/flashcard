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
      cast: [],
      crew:[],      
      route: 'home',
      movieSearch: [],
      movieRec: []      
    }    
  };

  componentDidMount() {    
    const movieCategories = ['popular', 'top_rated', 'upcoming'];
    movieCategories.forEach(category => {      
      fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`)  
        .then(resp => resp.json())
        .then(data => this.setState({[category]: data.results}))                 
    })
    //scroll event     
    window.addEventListener('scroll', this.handleScroll, true);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleSearch = (e) => {
    const text = e.target.value;    
    if(text) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`)
        .then(resp => resp.json())
        .then(movies => this.setState({ movieSearch: movies.results }))  
    } else {
      this.setState({ movieSearch: [] })
    }    
  };

  movieClick = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(resp => resp.json())
      .then(movie => this.setState({
          movieSelect: movie, 
          route: 'movie', 
          movieSearch: []
        })        
      )
      .catch(err => console.log('failed to fetch data'));

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
      .then(resp => resp.json())
      .then(credit => this.setState({
        cast: credit.cast,
        crew: credit.crew
      })) 

    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(movie => this.setState({ movieRec: movie.results }))
  };

  logoClick = (route) => {
    this.setState({route: route})          
  }

  handleScroll = () => {
    let y = window.scrollY;
    //use plain js codes
    const navbar = document.querySelector('.navbar');    
    if(!navbar) { return };
    if(y > 60) {
      navbar.style.backgroundColor = "black";
    } else {      
      navbar.style.backgroundColor = "transparent";
    }
  }  

  render() {    
    const { popular, top_rated, upcoming, movieSelect, cast, crew, route, movieSearch, movieRec } = this.state;    
    const movies = [[...popular], [...top_rated], [...upcoming]];      

    let moviePick;
    if(!popular[0] || !top_rated[0] || !upcoming[0]) {
      moviePick = []  
    } else { moviePick = [popular[0], top_rated[0], upcoming[0]] }    
    
    const titleImages = (array) => {
      return array.map(item => {
        if(!item.poster_path) { return null }
        return (
          <img 
            key={item.id}
            src={`http://image.tmdb.org/t/p/w92${item.poster_path}`} 
            alt={item.title} 
            onClick={() => this.movieClick(item.id)}
          />      
        )
      })
    }
    
    const imageSearch = titleImages(movieSearch);
    const imageRec = titleImages(movieRec);

    return (      
      <div>
        <Navigation           
          logoClick={this.logoClick} 
          handleScroll={this.handleScroll}
          handleSearch={this.handleSearch}
          imageSearch={imageSearch}
        />
        {route === 'home'?
          <div>            
            <Showcase 
              movies={moviePick} 
              movieClick={this.movieClick}
            />
            <div className="movie-category">
              <CardList 
                movieClick={this.movieClick}
                movies={movies}
              />              
            </div>                       
          </div>
          :<div>            
            <OneMovie 
              movieSelect={movieSelect} 
              cast={cast}
              crew={crew}
              movieClick={this.movieClick}
              imageRec={imageRec}
            />
          </div>
        }
      </div>
    )
  }  
}
  


export default App;





