import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px){
        padding: 0;
        flex-flow: row;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'Roboro' ,sans-serif;
    text-decoration: none;
    padding: .5rem;
    &.actual-page{
        border-bottom: 2px solid #FFF;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavLink activeClassName='actual-page' to={'/'}>Home</NavLink>            
            <NavLink activeClassName='actual-page' to={'/properties'}>Properties</NavLink>            
            <NavLink activeClassName='actual-page' to={'/aboutus'}>About Us</NavLink>            
        </Nav>
    );
};

export default Navigation;