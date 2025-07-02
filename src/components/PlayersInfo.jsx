import { useState } from "react";

export default function Players({ initiaName, symbol }) {

const[playerName , setPlayerName] = useState(initiaName)

    //create the useSate hook then u can update the player name and save 
    const [isEditing, setIsEditing] = useState(false);

    // create the function 
    function handleEditClick() {
        // setIsEditing(isEditing ? false : true)
        // setIsEditing(!isEditing)
        setIsEditing( (isEditing) => !isEditing)
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
// create the  input file that is why user click the edit button then chenge the name 
    let editPlayerName = <span className="player-name">{playerName}</span>;

     //  let btnCaption = "Edit"
    if (isEditing) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange} />
       // btnCaption="Save"
    }
    return (
        <>
            <li>
                <span className="player">
                    {editPlayerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
        </>
    );
}