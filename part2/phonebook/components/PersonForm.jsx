import React from 'react';

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        <label>Name: </label>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Number: </label>
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
