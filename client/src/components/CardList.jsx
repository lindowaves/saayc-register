// components/CardList.jsx
import React from 'react';
import Card from './Card';

const CardList = ({ games }) => {
  return (
    <div className="cards">
      {games && games.map((game) => (
        <Card
          key={game.idgames}
          id={game.idgames}
          name={game.name}
          surname={game.surname}
          age={game.age}
          gender={game.gender}
          contact={game.contact}
          reason={game.reason}
          timein={game.timein}
          timeout={game.timeout}
        />
      ))}
    </div>
  );
};

export default CardList;
