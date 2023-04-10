import React, { useState, useEffect, useContext } from 'react'

/* BOOTSTRAP IMPORTS */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// ICONS
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { UserDataContext } from '../context/user';

export default function EcommerceNavbar({userName}) {
    const [name, setName] = useState();
    //console.log("el primero: "+userName)
    const {userData, setUserData, setToken} = useContext(UserDataContext)
    useEffect(() => {
        //console.log('entre')
        setName(userName)
      }, []);
      //console.log("el segundo name: " + name)
    const onClickLogOut = (e) => {
        // console.log("name:")
        // console.log(name)
        // console.log(e.target.outerText)
        // if(userName == undefined){
        //     setName(userName);
        // } 
        // if(userName != undefined){
        //     setName(undefined)
        // }

        localStorage.clear()
        setUserData(null)
        setToken(null)
        
    }

    return (
        
        <Navbar bg="light" expand="lg">
            
            <Container fluid>
                <Navbar.Brand href="/">FAKE BLOOD</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav 
                        className="links-navbar me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/shop">Most wanted</Nav.Link>
                        <Nav.Link href="/sell-product">Sell product</Nav.Link>
                        
                        
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <a href="/shop"><AiOutlineShoppingCart className='navbar-icons' style={{fontSize: '30px', marginLeft: '15px'}}/></a>
                    {userData?<span onClick={onClickLogOut}>{localStorage.getItem('name')}</span>:<a href="/login" ><BiLogIn className='navbar-icons' style={{fontSize: '30px', marginLeft: '15px'}}/></a>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

//onClick={onClickLogOut}