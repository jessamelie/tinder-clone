import React, { useState } from "react";
import "../style/Cards.css";
import TinderCard from "react-tinder-card";

const Cards = () => {
  const [people, setPeople] = useState([
    {
      name: "Michael B. Jordan",
      url:"./src/assets/michael-b-jordan.jpeg"
    },
    {
        name: "Jackson Wang",
        url:"./src/assets/jackson-wang.jpg",
    },
    {
      name: "François Civil",
      url:"./src/assets/francois-civil.jpeg",
    },
    
    ]); 

  const swiped = (direction, nameToDelete) => {
    console.log('removing:'+ nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) =>{
    console.log(name + 'left the screen!');
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards-container">
        {/* Boucle mapping de chaque objet "person" du tableau [people] */}
        {people.map((person) => (
          <TinderCard
          className='swipe' 
          // Identification "clé/key" pour une identification unique de chaque carte
          key={person.name} 
          // Propriété des directions de balayage interdites
          preventSwipe={['up','down']}
          onSwipe={(dir) => swiped(dir, person.name)} 
          onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div 
            style={{backgroundImage:`url(${person.url})`}}
            className="card">
                <h3> {person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
