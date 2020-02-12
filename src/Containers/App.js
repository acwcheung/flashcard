import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
//.is the same directory; ./ go to the folder; ..leave the directory!
//import the data from another js file, the variable is an object of the file
// import { robots } from '../robots'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //import the data, put it in the initial state
      robots: [],
      searchfield: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({
        robots: users
      }))
  }

  handleSearch(e) {
    //directly take the event from the child 
    this.setState({
      searchfield: e.target.value
    });
  }

  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield)
        })
    return (
      //use turnary in the return()
      !robots.length? 
        <div>Loading</div>:
        <div>
          <h1>RoboFriend</h1>
          <SearchBox 
            searchfield={searchfield} 
            onSearch={this.handleSearch}
          />
          <CardList 
            robots={filteredRobots}
            searchfield={searchfield}  
          />
        </div>
    )
  }  
}
  


export default App;
