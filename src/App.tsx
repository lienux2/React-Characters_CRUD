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
  characterClass: string,
  description: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const result = axios.get('http://localhost:3004/characters')
    result.then(response => setCharacters(response.data))
  }, [])

  const addCharacter = (character: Character) => {

    axios.post('http://localhost:3004/characters', character)
      .then(response => {
        setCharacters((currentCharacters) => [...currentCharacters, response.data]);
      });

  };

  const deleteCharacter = (id: number) => {
    axios.delete(`http://localhost:3004/characters/${id}`)
      .then(() => {
        const updatedCharacters = characters.filter(character => character.id !== id);
        setCharacters(updatedCharacters);
      })
  };

  return (
    <>
      <div className='card-wrapper'>
        {characters.map((character) => (
          <Characters
            key={character.id}
            character={character}
            onDeleteCharacter={deleteCharacter}
          />
        ))}
      </div>

      <div className='characters-form'>
        <CharacterForm onAddCharacter={addCharacter} />
      </div>
    </>
  );
}

export default App;