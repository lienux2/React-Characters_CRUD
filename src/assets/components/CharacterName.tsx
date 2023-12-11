import { useState } from 'react';

interface CharacterNameProps {
    onCharacterName: (selectedCharacterName: string) => void;
}

export function CharacterName({ onCharacterName }: CharacterNameProps) {
    const [selectedCharacterName, setSelectedCharacterName] = useState<string>('');

    const handleCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setSelectedCharacterName(name);
        onCharacterName(name);
    };

    return (
        <>
            <label htmlFor="name">Enter character's name:</label>
            <input type="text" name="name" required id="name" value={selectedCharacterName} onChange={handleCharacterName} placeholder="Character Name..." />
        </>
    )
}