import { useState } from 'react';
import { CharacterAge } from "./CharacterAge";
import { CharacterDescription } from "./CharacterDescription";
import { CharacterName } from "./CharacterName";
import { ClassSelection } from "./ClassSelection";
import { RaceSelection } from "./RaceSelection";

interface NewFormProps {
    onAddCharacter: (character: Character) => void;
};

interface Character {
    name: string;
    race: string;
    age: string;
    charClass: string;
    description: string;
}

export function CharacterForm({ onAddCharacter }: NewFormProps) {

    const [characterName, setCharacterName] = useState<string>('');
    const [race, setRace] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [charClass, setCharClass] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAddCharacter = () => {

        if (characterName.trim() !== '' && race.trim() !== '' && age.trim() !== '' && charClass.trim() !== '' && description.trim() !== '') {
            onAddCharacter({
                name: characterName, 
                race: race, 
                age: age, 
                charClass: charClass, 
                description: description
            });

            setCharacterName('');
            setRace('');
            setAge('');
            setCharClass('');
            setDescription('');
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
                    <ClassSelection onSelectClass={setCharClass} />
                </div>
                <div className='form__group'>
                    <CharacterDescription onDescription={setDescription} />
                </div>
                <button className='button characters-form__add-button' type="submit">Add</button>
            </form>
        </>
    )
}