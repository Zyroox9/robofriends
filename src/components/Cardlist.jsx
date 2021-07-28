import React from 'react';
import Card from "./Card"

function Cardlist( {robots} ) {

    return (
        robots.map( (robot, index) => <Card 
          key={robot.id}
          id={index}
          name={robot.name} 
          username={robot.username} 
          email={robot.email} />)
      );
  }
  
  export default Cardlist;