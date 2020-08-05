import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby'
import Navigation from './Navigation';
import {css} from '@emotion/core'

const Header = () => {

    // consult logo.svg
    const {logo} = useStaticQuery(graphql`
        query{
            logo: file(relativePath: {eq: "logo.svg"}){
            publicURL
            }
        }
    `)      
    return (

        <header
            css={css`
                background-color: #0d283b;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >   
                <Link to="/">
                    <img css={css`width: 50px;`} src={logo.publicURL} alt="Real State Logo"/>
                </Link>

                <Navigation />
            </div>    
        </header>
    );
};

export default Header;