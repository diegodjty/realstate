import React from 'react';
import Layout from './../components/Layout';
import useIndex from './../hooks/useIndex';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image'
import heroCSS from '../css/hero.module.css'
import Find from './../components/Find';

const ImgBackground = styled(BackgroundImage)`
    height: 600px;
`;
const Index = () => {
    const i = useIndex()
    const {name,content,img} = i[0]
    return (
        <Layout>
            <ImgBackground
                tag="section"
                fluid={img.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.image}>
                    <h1 className={heroCSS.title}>Exclusive sale of Houses and Apartments</h1>
                </div>

            </ImgBackground>
            <main>
                <div css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}>
                </div>
                <h1>{name}</h1>
                <p css={css`text-align: center;`}>{content}</p>
            </main>
            <Find />
           
        </Layout>
    );
};

export default Index;