import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({children}) => {
    return (
        <>
        <Helmet>
            <title>Gatsby Real State</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Roboto:ital,wght@0,700;0,900;1,500;1,700;1,900&display=swap" rel="stylesheet"/>

        </Helmet>

            {children}
        </>  
    );
};

export default Layout;