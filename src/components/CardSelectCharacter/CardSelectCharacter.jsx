import React from 'react';
import "./style.css";

const CardSelectCharacter = ({name,img,setId,id,refPick,classname}) => {
    return (
        <div id={id} className={classname} ref={refPick} onClick={(e) => {
            setId(id);
            e.currentTarget.classList.add("Selected");
        }}>
            <img  src={"/assets/characters/"+img} alt={name} draggable="false"/>
            <p className="name">{name}</p>
        </div>
    );
}

export default CardSelectCharacter;
