import "../FormInputs.css";
import { useState } from "react";

interface CharacterNameProps {
  onCharacterName: (selectedCharacterName: string) => void;
}

export function CharacterName({ onCharacterName }: CharacterNameProps) {
  const [selectedCharacterName, setSelectedCharacterName] =
    useState<string>("");

  const handleCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setSelectedCharacterName(name);
    onCharacterName(name);
  };

  return (
    <>
      <label className="form-label" htmlFor="name">
        Name: <span>{selectedCharacterName}</span>
      </label>
      <input
        className="form-input"
        type="text"
        id="name"
        placeholder="Name..."
        required
        value={selectedCharacterName}
        onChange={handleCharacterName}
      />{" "}
    </>
  );
}
