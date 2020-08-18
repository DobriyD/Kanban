import React from "react";
import './style.css'

function Footer(props) {
    const {finished, active, name} = props;

    return (
        <footer className='footer'>
            <div className='footer_left'>
                <div className='footer_info'>
                    Active task: {active}
                </div>
                <div className='footer_info'>
                    Finished tasks: {finished}
                </div>
            </div>
            <div className='footer_left'>
                <div className='footer_info'>
                    Kanban board by {name} , {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}

export default Footer;