import React from "react";
import './style.css'

import LocalStorageService from "../../localStorageService";
import {Link} from "react-router-dom";

const TasksList = props => {
    const { type } = props;
    const { filterByType } = new LocalStorageService();
    const items = filterByType(type);
    const tasks = items.map(item => {
        return <div className='task' key={item.id}>
            <div className='task_title'>{item.title}</div>
            <div className='task_date'>Created: {item.date}</div>
            <div className='task_desc'>{item.desc}</div>
        </div>
    });

    return (
        <div className='tasks-container'>
            <h2 className='tasks_title'>Tasks</h2>
            <Link to='/' className='tasks_close'/>
            <div className='tasks'>
                {tasks}
            </div>
        </div>
    )
};

export default TasksList;