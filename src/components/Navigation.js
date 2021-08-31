import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Navigation = () => (
    <>
    <Nav>
        <NavList>
            <NavItem><Link to = '/admin-page'>AdminPage</Link></NavItem>
            <NavItem><Link to = '/user-list'>UserList</Link></NavItem>
            <NavItem><Link to = '/sales-management'>SalesManagement</Link></NavItem>
            <NavItem><Link to = '/home-page-settings'>HomePageSettings</Link></NavItem>
        </NavList>
    </Nav>
    </>
)

export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 0 auto;
`

const NavList = styled.ul`
    width: auto;
    margin: center;
`

const NavItem = styled.li`
    width: auto;
    margin-top: 30px;
    display: flex;
`