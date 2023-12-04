import { useState } from "react";

interface CharacterAgeProps {
    onSelectAge: (selectedAge: string) => void;
}

export function CharacterAge({ onSelectAge }: CharacterAgeProps) {
    const [selectedAge, setSelectedAge] = useState<number>(0);

    const handleSelectAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const age = parseInt(e.target.value, 10);
        setSelectedAge(isNaN(age) ? 0 : age);
        onSelectAge(isNaN(age) ? '0' : age.toString());
    };

    return (
        <>
            <label htmlFor="age">Enter your age:</label>
            <input type="number" name="age" id="age" value={selectedAge} onChange={handleSelectAge} />
        </>
    )
}