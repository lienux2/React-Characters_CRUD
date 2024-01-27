import "../FormInputs.css";
import { useState } from "react";

interface CharacterSurnameProps {
  onCharacterSurname: (selectedCharacterSurname: string) => void;
}

export function CharacterSurname({
  onCharacterSurname,
}: CharacterSurnameProps) {
  const [selectedCharacterSurname, setSelectedCharacterSurname] =
    useState<string>("");

  const handleCharacterSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const surname = e.target.value;
    setSelectedCharacterSurname(surname);
    onCharacterSurname(surname);
  };

  return (
    <>
      <label className="form-label" htmlFor="surname">
        Surname: <span>{selectedCharacterSurname}</span>
      </label>
      <input
        className="form-input"
        type="text"
        id="surname"
        placeholder="Surname..."
        required
        value={selectedCharacterSurname}
        onChange={handleCharacterSurname}
      />{" "}
    </>
  );
}
