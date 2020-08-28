import React from "react";
import './style.css'

function CardItem({title, deleteTask}) {

    return (
        <li id={'1'} className='card-list_item'>
            <p className='text'>{title}</p>
            <button className='btn delete' onClick={deleteTask}/>
        </li>
    )
}

export default CardItem;
