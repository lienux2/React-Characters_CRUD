import { useState } from "react";
import druid from '/druid.png'
import hunter from '/hunter.png'
import mage from '/mage.png'
import priest from '/priest.png'
import rogue from '/rogue.png'
import warlock from '/warlock.png'
import warrior from '/warrior.png'

interface ClassSelectionProps {
    onSelectClass: (selectedClass: string) => void;
}

export function ClassSelection({ onSelectClass }: ClassSelectionProps) {
    const [selectedClass, setSelectedClass] = useState<string>('');

    const handleSelectClass = (e: React.ChangeEvent<HTMLInputElement>) => {
        const charClass = e.target.value;
        setSelectedClass(charClass);
        onSelectClass(charClass);
    };

    return (
        <>
            <p>Select class:</p>
            <div className="class-selection">
                <label htmlFor="druid" className="class-label">
                    <img src={druid} alt="druid" className="class-image class-image__druid"
                        title="Druid" />
                    <span className="class-name__druid"></span>
                </label>
                <input type="radio" id="druid" value="druid" title='Druid' checked={selectedClass === 'druid'} onChange={handleSelectClass} />

                <label htmlFor="hunter" className="class-label">
                    <img src={hunter} alt="hunter" className="class-image class-image__hunter"
                        title="Hunter" />
                    <span className="class-name__hunter"></span>
                </label>
                <input type="radio" id="hunter" value="hunter" title='Hunter' checked={selectedClass === 'hunter'} onChange={handleSelectClass} />

                <label htmlFor="mage" className="class-label">
                    <img src={mage} alt="mage" className="class-image class-image__mage" title="Mage" />
                    <span className="class-name__mage"></span>
                </label>
                <input type="radio" id="mage" value="mage" title='Mage' checked={selectedClass === 'mage'} onChange={handleSelectClass} />

                <label htmlFor="priest" className="class-label">
                    <img src={priest} alt="priest" className="class-image class-image__priest"
                        title="Priest" />
                    <span className="class-name__priest"></span>
                </label>
                <input type="radio" id="priest" value="priest" title='Priest' checked={selectedClass === 'priest'} onChange={handleSelectClass} />

                <label htmlFor="rogue" className="class-label">
                    <img src={rogue} alt="rogue" className="class-image class-image__rogue"
                        title="Rogue" />
                    <span className="class-name__rogue"></span>
                </label>
                <input type="radio" id="rogue" value="rogue" title='Rogue' checked={selectedClass === 'rogue'} onChange={handleSelectClass} />

                <label htmlFor="warlock" className="class-label">
                    <img src={warlock} alt="warlock" className="class-image class-image__warlock"
                        title="Warlock" />
                    <span className="class-name"></span>
                </label>
                <input type="radio" id="warlock" value="warlock" title='Warlock' checked={selectedClass === 'warlock'} onChange={handleSelectClass} />

                <label htmlFor="warrior" className="class-label">
                    <img src={warrior} alt="warrior" className="class-image class-image__warrior"
                        title="Warrior" />
                    <span className="class-name__warrior"></span>
                </label>
                <input type="radio" id="warrior" value="warrior" title='Warrior' checked={selectedClass === 'warrior'} onChange={handleSelectClass} />
            </div>
        </>
    )
}