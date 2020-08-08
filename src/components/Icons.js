import React from 'react';
import { graphql,useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';


const IconsList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li{
        display: flex;
        img{
            margin-right: 1rem;
        }
    }
`
const Icons = ({wc,rooms,parking}) => {

    const {icons} = useStaticQuery(graphql`
        query{
            icons: allFile(filter: {relativeDirectory: {eq: "icons"}}) {
            edges {
                node {
                id
                publicURL
                }
            }
            }
        }
    `)
        const iconsImg = icons.edges
    return (
        <IconsList>
            <li>
                <img src={iconsImg[2].node.publicURL} alt="bathroom icon"/>
                <p>{wc}</p>
            </li>
            <li>
                <img src={iconsImg[1].node.publicURL} alt="bathroom icon"/>
                <p>{parking}</p>
            </li>
            <li>
                <img src={iconsImg[0].node.publicURL} alt="bathroom icon"/>
                <p>{rooms}</p>
            </li>
        </IconsList>
    );  
};

export default Icons;