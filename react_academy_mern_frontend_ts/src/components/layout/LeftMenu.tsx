
import React, { Component } from "react";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export class LeftMenu extends Component {

    render() {
        return (
            <Nav defaultActiveKey="/home" className="flex-column" variant="pills">
                <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" to="/books">Books<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" to="/authors">Authors<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" to="/genres">Genres<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" to="/bookinstances">Bookinstances<span className="sr-only">(current)</span></NavLink>
            </Nav>
        )
    }
}