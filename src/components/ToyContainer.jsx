import React from 'react';
import ToyCard from './ToyCard';

function ToyContainer({ toys, onIncreaseLikes, onDeleteToy }) {
  return (
    <div className="toy-collection">
      {toys.map((toy) => (
        <ToyCard 
          key={toy.id}
          toy={toy}
          onIncreaseLikes={onIncreaseLikes}
          onDeleteToy={onDeleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;