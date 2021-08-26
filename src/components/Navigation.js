import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Navigation = () => (
    <>
    <Nav>
        <NavList>
            <NavItem><Link to = '/home-page'>HomePage</Link></NavItem>
            
        </NavList>
    </Nav>
    </>
)

export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px soild #d1d8e4;

`
const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 20px;
    margin-top: 30px;
    display: flex;
`