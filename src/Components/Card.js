import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='div_container'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="Robots" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        
        
    )
}

export default Card;