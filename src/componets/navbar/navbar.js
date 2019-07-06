import React from 'react'
import "./navbar.css"

    const Nav = function(props) {
        return (
                <div className = 'navbar' >
                    <div className = 'container'>
                        <h1>Memory Game</h1>
                        <span className='score'>score: {props.score} | max score: {props.maxScore}</span>
                    </div>
                </div>
           
        );
    }
export default Nav;