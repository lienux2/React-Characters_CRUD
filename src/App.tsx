import { useEffect, useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import axios from "axios";

type Character = {
  id: number;
  name: string;
  surname: string;
  race: string;
  age: string;
  charClass: string;
  description: string;
};

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/characters").then((response) => {
      const charactersData = response.data;
      setCharacters(charactersData);
    });
  }, []);

  const addCharacter = (newCharacter:  {name: string,
    surname: string,
    race: string,
    age: string,
    charClass: string,
    description: string,}) => {
    axios
      .post("http://localhost:3000/characters", newCharacter)
      .then((response) => {
        const newCharacter = response.data;
        setCharacters((currentCharacters) => [
          ...currentCharacters,
          newCharacter,
        ]);
      });
  };

  const deleteCharacter = (id: number) => {
    axios.delete(`http://localhost:3000/characters/${id}`).then(() => {
      const updatedCharacters = characters.filter(
        (character) => character.id !== id
      );
      setCharacters(updatedCharacters);
    });
  };

  const editCharacter = (id: number, updatedCharacter: Partial<Character>) => {
    axios
      .put(`http://localhost:3000/characters/${id}`, updatedCharacter)
      .then(() => {
        const updatedCharacters = characters.map((character) =>
          character.id === id
            ? { ...character, ...updatedCharacter }
            : character
        );
        setCharacters(updatedCharacters);
      });
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <h1>Add new Character!</h1>
          {/* @ts-ignore */}
          <CharacterForm onAddCharacter={addCharacter}/>
        </div>
        <div className="content">
          <h1 className="content-title">All Characters</h1>

          <div className="card-container">
            {characters.map((character) => (
              <CharacterCard
              key={character.id}
                characters={character}
                onDeleteCharacter={deleteCharacter}
                onEditCharacter={editCharacter}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
