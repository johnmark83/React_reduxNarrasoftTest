import React, { Component, useState, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Action/auth";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

function Login(){
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('test');
    const [error, setError] = useState(false);
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();

    function onChangeUsername(e){
        setUsername(e.target.value);
    }

    function onChangePassword(e){
        setPassword(e.target.value);
    }

    function handleLogin(e){
        e.preventDefault();
        setLoading(true);
        if(username && password){
            dispatch(login(username, password))
                .then(() => {
                    window.location.reload();
                }).catch(() => {
                    setLoading(false);
                })
        } else {
            setLoading(false);
            setError(true);
        }
    }

    return(
        user.isLoggedIn? <Navigate to='/'/> :
        <>
        <Container>
            <h1 className="shadow-sm mt-5 p-3 text-center rounded">React+Redux Test Sample</h1>
            <Row>
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                {
                    error && <Alert variant="danger" onClose={() => setError(false)} dismissible>
                        <p>
                        Error Logging In.
                        </p>
                  </Alert>
                }
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={username} type="test" placeholder="Enter email" onChange={onChangeUsername} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password" onChange={onChangePassword}/>
                    </Form.Group>
                    <Button disabled={loading} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Login;