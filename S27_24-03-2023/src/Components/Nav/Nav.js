import React from 'react';
import "./Nav.css"
function Nav(props) {
    return (
        <div className='nav'>
            <div className='title'>
                <h2>React API Call</h2>
            </div>
            <div className='menu'>
                <a href="#">Home</a>
                <a href="#">Counter</a>
                <a href="#">Profile</a>
                <a href="">Support</a>
            </div>
        </div>
    );
}

export default Nav;