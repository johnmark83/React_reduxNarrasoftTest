import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Action/auth";

export default function Navigation(){
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return(
        <Navbar expand="lg" bg="light">
            <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Item style={{marginRight: '1rem'}}><Link to='/'>Home</Link></Nav.Item>
                  <Nav.Item><Link to='/profile'>Profile</Link></Nav.Item>
                </Nav>
                <Nav>
                    <Button onClick={handleLogout}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}