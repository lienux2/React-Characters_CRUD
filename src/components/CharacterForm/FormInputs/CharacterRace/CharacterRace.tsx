import "../FormInputs.css";
import { useState } from "react";

interface RaceSelectionProps {
  onSelectRace: (selectedRace: string) => void;
}

export function CharacterRace({ onSelectRace }: RaceSelectionProps) {
  const [selectedRace, setSelectedRace] = useState<string>("");

  const handleSelectRace = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const race = e.target.value;
    setSelectedRace(race);
    onSelectRace(race);
  };

  return (
    <>
      <label className="form-label" htmlFor="race">
        Race: <span>{selectedRace}</span>
      </label>
      <select
        className="form-input"
        required
        name="race"
        id="race"
        value={selectedRace}
        onChange={handleSelectRace}
      >
        <option value="" disabled>
          Select your race:
        </option>
        <option value="Human">Human</option>
        <option value="Dwarf">Dwarf</option>
        <option value="NightElf">NightElf</option>
        <option value="Gnome">Gnome</option>
        <option value="Draenei">Draenei</option>
        <option value="Worgen">Worgen</option>
      </select>
    </>
  );
}
