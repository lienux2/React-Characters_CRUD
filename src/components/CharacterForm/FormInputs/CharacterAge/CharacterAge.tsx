import { useState } from "react";
import "../FormInputs.css";

type CharacterAgeProps = {
  onSelectAge: (selectedAge: string) => void;
};

export function CharacterAge({ onSelectAge }: CharacterAgeProps) {
  const [selectedAge, setSelectedAge] = useState<number>(0);

  const handleSelectAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value, 10);
    setSelectedAge(isNaN(age) ? 0 : age);
    onSelectAge(isNaN(age) ? "0" : age.toString());
  };

  return (
    <>
      <label className="form-label" htmlFor="age">
        Age: <span>{selectedAge}</span>
      </label>
      <input
        className="form-input"
        id="age"
        type="number"
        placeholder="Age..."
        required
        value={selectedAge}
        onChange={handleSelectAge}
      />
    </>
  );
}
