import { useState } from 'react';
import { CharacterAge } from "./CharacterAge";
import { CharacterDescription } from "./CharacterDescription";
import { CharacterName } from "./CharacterName";
import { ClassSelection } from "./ClassSelection";
import { RaceSelection } from "./RaceSelection";

interface NewFormProps {
    onAddCharacter: (character: {
        name: string;
        race: string;
        age: string;
        characterClass: string;
        description: string;
    }) => void;
};

export function CharacterForm({ onAddCharacter }: NewFormProps) {

    const [characterName, setCharacterName] = useState<string>('');
    const [race, setRace] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [characterClass, setCharacterClass] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAddCharacter = (e) => {
        e.preventDefault();

        if (characterName.trim() !== '' && race.trim() !== '' && age.trim() !== '' && characterClass.trim() !== '' && description.trim() !== '') {
            onAddCharacter({
                name: characterName, 
                race: race, 
                age: age, 
                characterClass: characterClass, 
                description: description
            });

            e.target.reset();
        }
    }

    return (
        <>
            <form onSubmit={handleAddCharacter} className='characters-form__form'>
                <h3>Enter information</h3>
                <div className='form__group'>
                    <CharacterName onCharacterName={setCharacterName} />
                </div>
                <div className='form__group'>
                    <RaceSelection onSelectRace={setRace} />
                </div>
                <div className='form__group'>
                    <CharacterAge onSelectAge={setAge} />
                </div>
                <div className='form__group'>
                    <ClassSelection onSelectClass={setCharacterClass} />
                </div>
                <div className='form__group'>
                    <CharacterDescription onDescription={setDescription} />
                </div>
                <button className='button characters-form__add-button' type="submit">Add</button>
            </form>
        </>
    )
}