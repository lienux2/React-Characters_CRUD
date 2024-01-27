import "../FormInputs.css";
import { useState } from "react";
import druid from "/druid.png";
import hunter from "/hunter.png";
import mage from "/mage.png";
import priest from "/priest.png";
import rogue from "/rogue.png";
import warlock from "/warlock.png";
import warrior from "/warrior.png";

interface ClassSelectionProps {
  onSelectClass: (selectedClass: string) => void;
}

export function CharacterClass({ onSelectClass }: ClassSelectionProps) {
  const [selectedClass, setSelectedClass] = useState<string>("");

  const handleSelectClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const charClass = e.target.value;
    setSelectedClass(charClass);
    onSelectClass(charClass);
  };

  return (
    <>
      <label htmlFor="druid">
        <img src={druid} alt="druid" title="Druid" className="class-image" />
      </label>
      <input
        type="radio"
        id="druid"
        value="Druid"
        title="Druid"
        checked={selectedClass === "druid"}
        onChange={handleSelectClass}
      ></input>

      <label htmlFor="hunter">
        <img src={hunter} alt="hunter" title="Hunter" className="class-image" />
      </label>
      <input
        type="radio"
        id="hunter"
        value="Hunter"
        title="Hunter"
        checked={selectedClass === "hunter"}
        onChange={handleSelectClass}
      />

      <label htmlFor="mage">
        <img src={mage} alt="mage" title="Mage" className="class-image" />
      </label>
      <input
        type="radio"
        id="mage"
        value="Mage"
        title="Mage"
        checked={selectedClass === "mage"}
        onChange={handleSelectClass}
      />

      <label htmlFor="priest">
        <img src={priest} alt="priest" title="Priest" className="class-image" />
      </label>
      <input
        type="radio"
        id="priest"
        value="Priest"
        title="Priest"
        checked={selectedClass === "priest"}
        onChange={handleSelectClass}
      />

      <label htmlFor="rogue">
        <img src={rogue} alt="rogue" title="Rogue" className="class-image" />
      </label>
      <input
        type="radio"
        id="rogue"
        value="Rogue"
        title="Rogue"
        checked={selectedClass === "rogue"}
        onChange={handleSelectClass}
      />

      <label htmlFor="warlock">
        <img
          src={warlock}
          alt="warlock"
          title="Warlock"
          className="class-image"
        />
      </label>
      <input
        type="radio"
        id="warlock"
        value="Warlock"
        title="Warlock"
        checked={selectedClass === "warlock"}
        onChange={handleSelectClass}
      />

<label htmlFor="warrior">
        <img
          src={warrior}
          alt="warrior"
          title="Warrior"
          className="class-image"
        />
      </label>
      <input
        type="radio"
        id="warrior"
        value="Warrior"
        title="Warrior"
        checked={selectedClass === "warrior"}
        onChange={handleSelectClass}
      />
    </>
  );
}
