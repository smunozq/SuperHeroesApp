import React, { Component } from 'react';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap'

class Navbar1 extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Super Heroes</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default Navbar1
