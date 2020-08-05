import React from 'react';
import Layout from './../components/Layout';
import useIndex from './../hooks/useIndex';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

const Index = () => {
    const i = useIndex()
    const {name,content,img} = i[0]
    return (
        <Layout>
            <main>
                <div css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}>
                </div>
                <h1>{name}</h1>
                <p css={css`text-align: center`}>{content}</p>
            </main>
           
        </Layout>
    );
};

export default Index;