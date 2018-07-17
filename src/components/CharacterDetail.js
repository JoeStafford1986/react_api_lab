import React from 'react';

const CharacterDetail = (props) =>{
    if(!props.character) return null;
    return (
      <div>
        <h3>Name: {props.character.name}</h3>
        <p>House: {props.character.house}</p>
        <p>Patronus: {props.character.patronus}</p>
        <img src= {props.character.image}></img>
      </div>
    )
}

export default CharacterDetail;
