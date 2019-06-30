import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import "./navbar.css"

class Navbar extends Component {

    state = {

    }

    render() {
        return (
            <Container>
            <ul className="navbar">
                <li className="nav-item">
                    <h1>Clicky Game</h1>
                </li>
                <li className="nav-item">

                </li>
                <li className="nav-item">

                </li>
                <li className="nav-item">

                </li>
            </ul>
            </Container>
        );
    }
}
export default Navbar;