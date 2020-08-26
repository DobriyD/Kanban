import React from "react";
import './style.css'

function CardItem({title}) {

    return (
        <li className='card-list_item'>
            <p className='text'>{title}</p>
            <button className='btn delete' onClick={this.delTask}/>
        </li>
    )
}

export default CardItem;
