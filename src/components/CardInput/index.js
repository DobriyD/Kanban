import React from "react";
import './style.css';

function CardInput(props) {
    return (
        <input
            {...props}
            placeholder='Enter task'
            type='text'
            className='card_input'
            autoFocus
        />
    )
}

export default CardInput;