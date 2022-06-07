import React from 'react';
import styled from 'styled-components';
import { Text24 } from '../../Consts/Text';


const Footer = (props) => {

    const FooterWrapper = styled.footer`
    display:flex;
    flex-direction:row;
    background-color:#1D1D1B;
    align-items:center;
    padding:10px;
    max-height:122px;
    
    img {
        width:80px;
        margin: 20px;

    }

    `

    return (
        <FooterWrapper>
            <img src="../Logo.svg" />
            <Text24>Изработено од студенти на Brainster</Text24>
            
        </FooterWrapper>
    );
};

export default Footer;