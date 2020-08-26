import React from "react";
import { Link } from 'react-router-dom';

import './style.css';
import {ReactComponent as AddIcon} from './add-card.svg'

const Card = (props) => {
    const {saveTasks, actionComponent, isShowAction, showAction, children: content, title, link} = props;
    const button = (
        <button className='card_action' disabled={isShowAction} onClick={showAction}>
            <AddIcon/>
            Add task
        </button>
    );

    const submitButton = (
        <button className='submit_button' hidden={!isShowAction} onClick={saveTasks}>
            Submit
        </button>
    );

    const action = isShowAction ? actionComponent : null;

    // const btn = taskTitle < 1 ? submitButton : button;

    return (
        <div className='card' onBlur={console.log('1')}>
            <div className='card_title'><Link to={'/' + link} className='card_link'>{title}</Link></div>
            <ul className='card_list'>
                { content }
            </ul>
            {action}
            <div className='buttons'>
                 {button}
                 {submitButton}
            </div>
        </div>
    )
};

export default Card;