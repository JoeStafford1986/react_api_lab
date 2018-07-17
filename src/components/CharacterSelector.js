import React from 'react';

const CharacterSelector = (props) => {
  const options = props.characters.map( (character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  });

  function handleChange(event) {
    const selectedIndex = event.target.value;
    props.onCharacterSelected(selectedIndex);
  }

  return (
    <select id="character-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a character</option>
      {options}
    </select>

  );
}

export default CharacterSelector;
