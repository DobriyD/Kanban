import React from "react";
import './style.css'

function CardItem({title}) {

    const deleteTask = (value) => {
        this.state.tasks.splice(value, 1);
    };

    return (
        <li className='card-list_item'>
            <p className='text'>{title}</p>
            <button className='btn delete' onClick={deleteTask}/>
        </li>
    )
}

export default CardItem;
