import React from 'react';
import Helmet from 'react-helmet';
import {Global, css} from '@emotion/core'

const Layout = ({children}) => {
    return (
        <>
            {/* Global styles for the entire project */}
            <Global 
                styles={css`
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after{
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 1.6rem;
                        line-height: 2;
                        font-family: 'Lato', sans-serif;
                    }
                    h1,h2,h3{
                        margin: 0;
                        line-height: 1.5
                    }
                    h1,h2{
                        text-align: center;
                        font-family: 'Lato', sans-serif;
                        font-weight: 300;
                    }
                    h3{
                        font-family: 'Roboto', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .container{
                        max-width: 120rem;
                        margin: 0 auto;
                        width: 95%;
                    }
                    img{
                        max-width: 100%;
                    }
                `}
            />
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