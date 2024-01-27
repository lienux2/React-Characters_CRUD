import { useState } from "react";
import Button from "../Button/Button";
import "./CharacterForm.css";
import { CharacterAge } from "./FormInputs/CharacterAge/CharacterAge";
import { CharacterClass } from "./FormInputs/CharacterClass/CharacterClass";
import { CharacterDescription } from "./FormInputs/CharacterDescription/CharacterDescription";
import { CharacterName } from "./FormInputs/CharacterName/CharacterName";
import { CharacterSurname } from "./FormInputs/CharacterSurname/CharacterSurname";
import { CharacterRace } from "./FormInputs/CharacterRace/CharacterRace";

interface CharacterProps {
  character: {
      name: string;
      surname: string;
      race: string;
      age: string;
      charClass: string;
      description: string;
  };
  onAddCharacter: (newCharacter: CharacterProps) => void;
};

export default function CharacterForm({
  onAddCharacter,
}: CharacterProps) {

  const [characterName, setCharacterName] = useState<string>("");
  const [race, setRace] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [charClass, setCharClass] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddCharacter = () => {
    if (
      characterName.trim() !== "" &&
      race.trim() !== "" &&
      age.trim() !== "" &&
      charClass.trim() !== "" &&
      description.trim() !== "" && 
      surname.trim() !== ""
    ) {
      const newCharacter = ({
        name: characterName,
        surname: surname,
        race: race,
        age: age,
        charClass: charClass,
        description: description,
      });
      // @ts-ignore
      onAddCharacter(newCharacter);
    }
    setCharacterName("");
    setSurname("");
    setRace("");
    setAge("");
    setCharClass("");
    setDescription("");
  };

  return (
    <form className="form-container">
      <div className="form-sections">
        <div className="form-content">
          <CharacterName onCharacterName={setCharacterName} />
        </div>

        <div className="form-content">
          <CharacterSurname onCharacterSurname={setSurname} />
        </div>
      </div>

      <div className="form-sections">
        <div className="form-content">
          <CharacterAge onSelectAge={setAge} />
        </div>

        <div className="form-content">
          <CharacterRace onSelectRace={setRace} />
        </div>
      </div>

      <div className="form-content">
        <label className="form-label">
          Class: <span>{charClass}</span>
        </label>

        <div className="form-radio">
          <CharacterClass onSelectClass={setCharClass} />
        </div>
      </div>

      <div className="form-content">
        <CharacterDescription onDescription={setDescription} />
      </div>

      <Button buttonType="submit" buttonStyle="create" buttonName="Add" click={handleAddCharacter}/>
    </form>
  );
}
