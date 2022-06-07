import React from 'react';
import styled from 'styled-components';
import { Text16, Text18 } from '../../Consts/Text';

const SingleCard = styled.article`
flex-basis: 30%;
justify-content:center;
margin:1%;
 
img {
    max-height:200px;
    max-width:100%;
    overflow:none;
    display:block;
    margin:0 auto;
}

.text18 {
    margin:15px 0 13px;
}

.text16 {
    margin-bottom:50px;
}

button {
    background-color: #FBD249;
    text-transform:uppercase;
}

@media(max-width:524px) {
    flex-basis:100%;
}
`

const Card2 = ({info,btn}) => {
    
    return (
        <SingleCard className="Card">
            
            <img className="img" 
            src={info.image} alt="img" />
            <Text18 className="text18">{info.title}</Text18>
            <Text16 className="text16">{info.body}</Text16>         

        </SingleCard>
    );
};

export default Card2;