import { useEffect, useState } from 'react';
import './App.css'
import { CharacterForm } from './assets/components/CharacterForm';
import { Characters } from './assets/components/Characters';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  race: string;
  age: string;
  charClass: string,
  description: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/characters')
      .then(response => {
        const charactersData = response.data.characters;
        setCharacters(charactersData);
      });
  }, []);

  const addCharacter = (character: Character) => {
    axios.post('http://localhost:3001/character', character)
      .then(response => {
        const newCharacter = response.data.characters;
        setCharacters((currentCharacters) => [...currentCharacters, newCharacter]);
      });
  };

  const deleteCharacter = (id: number) => {
    axios.delete(`http://localhost:3001/characters/${id}`)
      .then(() => {
        const updatedCharacters = characters.filter(character => character.id !== id);
        setCharacters(updatedCharacters);
      })
  };

  const editCharacter = (id: number, updatedCharacter: Partial<Character>) => {
    axios.put(`http://localhost:3001/characters/${id}`, updatedCharacter)
      .then(() => {
        const updatedCharacters = characters.map(character => 
          character.id === id ? { ...character, ...updatedCharacter } : character
        );
        setCharacters(updatedCharacters);
      });
  };

  return (
    <>
      <div className='card-wrapper'>
  {characters && characters.map((character) => (
    <Characters
      key={character.id}
      character={character}
      onDeleteCharacter={deleteCharacter}
      onEditCharacter={editCharacter}
    />
  ))}
</div>

      <div className='characters-form'>
        <CharacterForm 
        onAddCharacter={addCharacter} />
      </div>
    </>
  );
}

export default App;