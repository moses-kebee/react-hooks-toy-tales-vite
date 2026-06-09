import React from 'react';

function ToyCard({ toy, onIncreaseLikes, onDeleteToy }) {
  const handleLikeClick = () => {
    onIncreaseLikes(toy.id, toy.likes);
  };

  const handleDeleteClick = () => {
    onDeleteToy(toy.id);
  };

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        {`Like <3`}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;