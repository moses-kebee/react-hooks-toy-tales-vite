import React, { useState, useEffect } from 'react';
import Header from './Header';
import ToyForm from './ToyForm';
import ToyContainer from './ToyContainer';

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // GET: Fetch all toys
  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);

  // POST: Add new toy
  const handleAddToy = (newToy) => {
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => setToys([...toys, data]));
  };

  // PATCH: Increase likes
  const handleIncreaseLikes = (id, currentLikes) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: currentLikes + 1 })
    })
      .then(res => res.json())
      .then(updatedToy => {
        const updatedToys = toys.map(toy =>
          toy.id === updatedToy.id ? updatedToy : toy
        );
        setToys(updatedToys);
      });
  };

  // DELETE: Remove toy
  const handleDeleteToy = (id) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedToys = toys.filter(toy => toy.id !== id);
        setToys(updatedToys);
      });
  };

  return (
    <div className="App">
      <Header />
      {showForm ? (
        <ToyForm 
          onAddToy={handleAddToy} 
          onToggleForm={() => setShowForm(false)} 
        />
      ) : (
        <button 
          className="add-button" 
          onClick={() => setShowForm(true)}
        >
          Add a Toy
        </button>
      )}
      <ToyContainer 
        toys={toys} 
        onIncreaseLikes={handleIncreaseLikes}
        onDeleteToy={handleDeleteToy}
      />
    </div>
  );
}

export default App;