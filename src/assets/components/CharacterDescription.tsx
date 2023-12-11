import { useState } from "react";

interface DescriptionProps {
    onDescription: (typedDescription: string) => void;
}

export function CharacterDescription({ onDescription }: DescriptionProps) {
    const [typedDescription, setTypedDescription] = useState<string>('');

    const handleTypeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const description = e.target.value;
        setTypedDescription(description);
        onDescription(description);
    };

    return (
        <>
            <label htmlFor="description">Add character description</label>
            <textarea name="description" required id="description" value={typedDescription} onChange={handleTypeDescription}></textarea>
        </>
    )
}