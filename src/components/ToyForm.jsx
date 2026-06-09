import React, { useState } from 'react';

function ToyForm({ onAddToy, onToggleForm }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newToy = {
      name: name,
      image: image,
      likes: 0
    };
    
    onAddToy(newToy);
    setName('');
    setImage('');
    onToggleForm();
  };

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Add a new toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value={name}
          className="input-text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={image}
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;