import worgen from '/Worgen.png'
import draenei from '/Draenei.png'
import dwarf from '/Dwarf.png'
import gnome from '/Gnome.png'
import human from '/Human.png'
import nightElf from '/NightElf.png'
import druid from '/druid.png'
import hunter from '/hunter.png'
import mage from '/mage.png'
import priest from '/priest.png'
import rogue from '/rogue.png'
import warlock from '/warlock.png'
import warrior from '/warrior.png'
import { useState } from "react";

interface CharacterProps {
    character: {
        id: number;
        name: string;
        race: string;
        age: string;
        charClass: string;
        description: string;
    };
    onDeleteCharacter: (id: number) => void;
    onEditCharacter: (id: number, updatedCharacter: Partial<Character>) => void;
};

export function Characters({ character, onDeleteCharacter, onEditCharacter }: CharacterProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedCharacter, setEditedCharacter] = useState({ ...character });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setEditedCharacter((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSave = () => {
      onEditCharacter(character.id, editedCharacter);
      setIsEditing(false);
    };

    const addImage = (): string => {
        let image = '';
        if (character.race === 'human' || character.race === 'Human') {
            image = human;
        } else if (character.race === 'worgen' || character.race === 'Worgen') {
            image = worgen;
        } else if (character.race === 'dwarf' || character.race === 'Dwarf') {
            image = dwarf;
        } else if (character.race === 'gnome' || character.race === 'Gnome') {
            image = gnome;
        } else if (character.race === 'nightElf' || character.race === 'NightElf') {
            image = nightElf;
        } else if (character.race === 'draenei' || character.race === 'Draenei') {
            image = draenei;
        }
        return image;
    }

    const addImageToClass = (): string => {
      let imageClass = '';
      if (character.charClass === 'druid' || character.charClass === 'Druid') {
        imageClass = druid;
      } else if (character.charClass === 'hunter' || character.charClass === 'Hunter') {
        imageClass = hunter;
      } else if (character.charClass === 'mage' || character.charClass === 'Mage') {
        imageClass = mage;
      } else if (character.charClass === 'priest' || character.charClass === 'Priest') {
        imageClass = priest;
      } else if (character.charClass === 'rogue' || character.charClass === 'Rogue') {
        imageClass = rogue;
      } else if (character.charClass === 'warlock' || character.charClass === 'Warlock') {
        imageClass = warlock;
      } else if (character.charClass === 'warrior' || character.charClass === 'Warrior') {
        imageClass = warrior;
      }
      return imageClass;
  }

    const image = addImage();
    const imageClass = addImageToClass();

    return (
        <>
          <div className='characters' key={character.id}>
            {isEditing ? (
              <>
              <div className='character-edit-image'>
                <img className='characters-image' src={image} alt="" />
                </div>
                <div className='character-edit'>
                <label>Name:</label>
                <input type='text' name='name' value={editedCharacter.name} onChange={handleInputChange} />
                <label>Race:</label>
                <input type='text' name='race' value={editedCharacter.race} onChange={handleInputChange} />
                <label>Age:</label>
                <input type='text' name='age' value={editedCharacter.age} onChange={handleInputChange} />
                <label>Class:</label>
                <input type='text' name='charClass' value={editedCharacter.charClass} onChange={handleInputChange} />
                <label>Description:</label>
                <textarea className='description' name='description' value={editedCharacter.description} onChange={handleInputChange} />

                <button onClick={handleEditSave}>Save</button>
                </div>

              </>
            ) : (
              <>
                <img className='characters-image' src={image} alt="" />
                <h1 className="characters-name">{character.name}</h1>
                <h2 className='characters-race'>{character.race}</h2>
                <h3 className='characters-age'>{character.age}</h3>
                <h3 className='characters-class'><img className='classImage' src={imageClass} alt="" /> {character.charClass}</h3>
                <h3 className='characters-description'>{character.description}</h3>
                <div className='button-wrapper'>
                  <button className='button characters-form__edit-button' onClick={handleEditToggle}>Edit</button>
                  <button className='button characters-form__delete-button' onClick={() => onDeleteCharacter(character.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        </>
      )};