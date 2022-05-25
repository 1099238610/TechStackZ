import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
// import { Button } from "../Button.js"
import Button from "@mui/material/Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        const submit = () => {
            console.log("techInfo");
        }
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TechStackz</h1>
                {/* <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div> */}
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <i className={item.icon}></i>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button variant="contained" onClick={submit}>Submit</Button> */}
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
    }
}

export default Navbar