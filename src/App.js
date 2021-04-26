import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
    console.log(count);
  }, [count]); // only run if count changes

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  // destructuring

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (robots.length === 0) {
    return <h1>loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
};

export default App;
