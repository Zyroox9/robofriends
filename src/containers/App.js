import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import { useState } from "react";
import { useEffect } from "react";
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundry";

function App() {
  const [state, setState] = useState({
    robots: [],
    searchField: ''
  })
  const {robots, searchField} = state;

  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => 
        setState( prevVal => {
          return { ...prevVal, robots: users }
      }) );
  }, []);

  function onSearchChange(event) {
    const {value} = event.target

    setState( prevVal => {
      return { ...prevVal, searchField: value }
    });
  }

  const filteredRobots = robots.filter( robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

  return !robots.length ? 
    <h1>Loading</h1> :
    
    (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchField={searchField} searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <Cardlist robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
}

export default App;
