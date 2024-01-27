import { useState } from "react";
import Button from "../Button/Button";
import "./CharacterCard.css";
import worgen from "/Worgen.png";
import draenei from "/Draenei.png";
import dwarf from "/Dwarf.png";
import gnome from "/Gnome.png";
import human from "/Human.png";
import nightElf from "/NightElf.png";

type Character = {
  characters: {
    id: number;
    name: string;
    surname: string;
    race: string;
    age: string;
    charClass: string;
    description: string;
  };
  onDeleteCharacter: (id: number) => void;
  onEditCharacter: (id: number, updatedCharacters: any) => void;
};

export default function CharacterCard({
  characters,
  onDeleteCharacter,
  onEditCharacter,
}: Character) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState({ ...characters });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    onEditCharacter(characters.id, editedCharacter);
    setIsEditing(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const addImage = (): string => {
    let image = "";
    if (characters.race === "human" || characters.race === "Human") {
      image = human;
    } else if (characters.race === "worgen" || characters.race === "Worgen") {
      image = worgen;
    } else if (characters.race === "dwarf" || characters.race === "Dwarf") {
      image = dwarf;
    } else if (characters.race === "gnome" || characters.race === "Gnome") {
      image = gnome;
    } else if (
      characters.race === "nightElf" ||
      characters.race === "NightElf"
    ) {
      image = nightElf;
    } else if (characters.race === "draenei" || characters.race === "Draenei") {
      image = draenei;
    }
    return image;
  };

  const image = addImage();

  return (
    <>
      <div className="card">
        {isEditing ? (
          <div className="card-content">
            <img className="card-image" src={image} alt="character-image" />
            <h1 className="card-info">
              <input
                className="editing-input"
                type="text"
                name="name"
                value={editedCharacter.name}
                onChange={handleInputChange}
              />
            </h1>
            <h1 className="card-info">
              <input
                className="editing-input"
                type="text"
                name="surname"
                value={editedCharacter.surname}
                onChange={handleInputChange}
              />
            </h1>
            <p className="card-info">
              <input
                className="editing-input"
                type="text"
                name="age"
                value={editedCharacter.age}
                onChange={handleInputChange}
              />
            </p>
            <h3>
              <input
                type="text"
                className="editing-input"
                name="race"
                value={editedCharacter.race}
                onChange={handleInputChange}
              />
            </h3>
            <p>
              <input
                type="text"
                className="editing-input"
                name="class"
                value={editedCharacter.charClass}
                onChange={handleInputChange}
              />
            </p>
            <p className="description">
              <textarea
                className="editing-input"
                name="description"
                id=""
                cols={30}
                rows={7}
                value={editedCharacter.description}
                onChange={handleInputChange}
              ></textarea>
            </p>
          </div>
        ) : (
          <div className="card-content">
            <img className="card-image" src={image} alt="" />
            <h1 className="card-info">{characters.name}</h1>
            <h1 className="card-info">{characters.surname}</h1>
            <p className="card-info">{characters.age}</p>
            <h3>{characters.race}</h3>
            <p>{characters.charClass}</p>
            <p className="description">{characters.description}</p>
          </div>
        )}

        <div className="button-wrapper">
          <div className="buttons">
            {isEditing ? (
              <>
                <Button
                  buttonType="button"
                  buttonStyle="cancel"
                  buttonName="Cancel"
                  click={handleEditToggle}
                />
                <Button
                  buttonType="button"
                  buttonStyle="save"
                  buttonName="Save"
                  click={handleEditSave}
                />
              </>
            ) : (
              <>
                <Button
                  buttonType="button"
                  buttonStyle="edit"
                  buttonName="Edit"
                  click={handleEditToggle}
                />
                <Button
                  buttonType="button"
                  buttonStyle="delete"
                  buttonName="Delete"
                  click={() => onDeleteCharacter(characters.id)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
