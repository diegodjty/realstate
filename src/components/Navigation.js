import React from 'react';
import {Link} from 'gatsby';

const Navigation = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>            
            <Link to={'/properties'}>Properties</Link>            
            <Link to={'/aboutus'}>About Us</Link>            
        </nav>
    );
};

export default Navigation;