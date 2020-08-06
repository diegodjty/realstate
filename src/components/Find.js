import React from 'react';
import { graphql,useStaticQuery } from 'gatsby';
import BackgroundImage  from 'gatsby-background-image';
import styled from "@emotion/styled";
import heroCSS from '../css/hero.module.css'

const ImgBackground = styled(BackgroundImage)`
    height: 300px;
`

const Find = () => {

    const {image} = useStaticQuery(graphql`
        query{
            image: file(relativePath: {eq: "encuentra.jpg"}){
            sharp: childImageSharp{
                fluid(maxWidth: 1500){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }
    `)
    console.log(image)

    return (
        <ImgBackground
           tag="section"
           fluid={image.sharp.fluid}
           fadeIn="soft" 
        >
            <div className={heroCSS.image}>
                <h3 className={heroCSS.title}>Find Your Dream House</h3>
                <p>15 Years of Experience</p>
            </div>
        </ImgBackground>
    );
};

export default Find;