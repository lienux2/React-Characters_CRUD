import { useState } from "react";

interface RaceSelectionProps {
  onSelectRace: (selectedRace: string) => void;
}

export function RaceSelection({ onSelectRace }: RaceSelectionProps) {
  const [selectedRace, setSelectedRace] = useState<string>('');

  const handleSelectRace = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const race = e.target.value;
    setSelectedRace(race);
    onSelectRace(race);
  };

  return (
    <>
      <label htmlFor="race">Choose race:</label>
      <select name="race" id="race" value={selectedRace} onChange={handleSelectRace}>
        <option value="" disabled>Select your race:</option>
        <option value="human">Human</option>
        <option value="dwarf">Dwarf</option>
        <option value="nightElf">NightElf</option>
        <option value="gnome">Gnome</option>
        <option value="draenei">Draenei</option>
        <option value="worgen">Worgen</option>
      </select>
    </>
  )
}