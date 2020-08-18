import React, {Component} from "react";
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import './style.css'
import userAvatar from './user-avatar.png'

const AnimMenu = styled.div`animation: 0.5s ${keyframes`${fadeInDown}`} 1`;

class UserMenu extends Component{
    state = {
        show: false,
        login: true,
    };

    menuToggle = () => {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    };

    render() {
        const { show, login } = this.state;
        let arrowClass = 'user-menu__arrow';
        let dropdownClass = 'user__dropdown';
        let listItems = null;

        if (show) {
            arrowClass += ' user-menu__arrow--rotate';
            dropdownClass += ' user__dropdown--show';
        }

        if (login) {
            listItems = (
                <AnimMenu>
                    <li className='user-menu__list-item'>
                        Profile
                    </li>
                    <li className='user-menu__list-item'>
                        Settings
                    </li>
                    <li className='user-menu__list-item'>
                        Log Out
                    </li>
                </AnimMenu>
            )
        } else {
            listItems = (
                <>
                    <li className='user-menu__list-item'>
                        Login
                    </li>
                    <li className='user-menu__list-item'>
                        Register
                    </li>
                </>
            )
        }

        return (
            <div className='user-menu'>
                <div className='user-menu__view' onClick={this.menuToggle}>
                    <img src={userAvatar} alt='Avatar' className='user-menu__avatar'/>
                    <span className={arrowClass}/>
                </div>
                <div className={dropdownClass}>
                    <ul className='user-menu__list'>
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserMenu;