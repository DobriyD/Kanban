import React from "react";
import "./style.css"
import UserMenu from '../UserMenu'

function Header() {
    return (
        <header className='header'>
            <h1 className='header_title'>Awesome Kanban Board</h1>
            <div className='header_user'>
                <UserMenu/>
            </div>
        </header>
    )
}

export default Header;