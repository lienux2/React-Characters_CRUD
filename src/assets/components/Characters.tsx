import worgen from '/Worgen.png'
import draenei from '/Draenei.png'
import dwarf from '/Dwarf.png'
import gnome from '/Gnome.png'
import human from '/Human.png'
import nightElf from '/NightElf.png'

interface CharacterProps {
    character: {
        id: number;
        name: string;
        race: string;
        age: string;
        characterClass: string;
        description: string;
    };
    onDeleteCharacter: (id: number) => void;
};

export function Characters({ character, onDeleteCharacter }: CharacterProps) {

    const addImage = (): string => {
        let image = '';
        if (character.race === 'human') {
            image = human;
        } else if (character.race === 'worgen') {
            image = worgen;
        } else if (character.race === 'dwarf') {
            image = dwarf;
        } else if (character.race === 'gnome') {
            image = gnome;
        } else if (character.race === 'nightElf') {
            image = nightElf;
        } else if (character.race === 'draenei') {
            image = draenei;
        }
        return image;
        console.log(image);
    }

    const image = addImage();

    return (
        <>
            <div className='characters' key={character.id}>
                <img className='characters-image' src={image} alt="" />
                <h1 className="characters-name">{character.name}</h1>
                <h2 className='characters-race'>{character.race}</h2>
                <h3 className='characters-age'>{character.age}</h3>
                <h3 className='characters-class'>{character.characterClass}</h3>
                <h3 className='characters-description'>{character.description}</h3>
                <div className='button-wrapper'>
                    <button className='button characters-form__edit-button'>Edit</button>
                    <button className='button characters-form__delete-button' onClick={() => onDeleteCharacter(character.id)}>Delete</button>
                </div>
            </div>
        </>
    );
}