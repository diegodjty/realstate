import React,{useState,useEffect} from 'react';
import { graphql,useStaticQuery } from 'gatsby';
import {css} from "@emotion/core";
import useProperties from './../hooks/useProperties';
import PropertyPreview from './PropertyPreview';
import PropertiesListCSS from '../css/PropertiesList.module.css'

const PropertiesList = () => {

    const result = useProperties()
    
    return (
        <>
            <h2 css={css`margin-top: 5rem;`}>Our Properties</h2>

            <ul className={PropertiesListCSS.properties}>
                {result.map( property =>(
                    <PropertyPreview key={property.id} property={property}/>
                ))}
            </ul>
        </>
    );
};

export default PropertiesList;