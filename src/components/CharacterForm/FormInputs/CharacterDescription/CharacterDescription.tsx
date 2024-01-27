import "../FormInputs.css";
import { useState } from "react";

interface DescriptionProps {
  onDescription: (typedDescription: string) => void;
}

export function CharacterDescription({ onDescription }: DescriptionProps) {
  const [typedDescription, setTypedDescription] = useState<string>("");

  const handleTypeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    setTypedDescription(description);
    onDescription(description);
  };

  return (
    <>
      <label className="form-label" htmlFor="description">
        Description:
      </label>
      <textarea
        className="form-input"
        rows={5}
        name="description"
        required
        id="description"
        value={typedDescription}
        onChange={handleTypeDescription}
        placeholder="Description of your character..."
      ></textarea>{" "}
    </>
  );
}
