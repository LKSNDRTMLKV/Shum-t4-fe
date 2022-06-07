import styled from 'styled-components';

//Special eements
// Text for yellow buttons
export const Text_btn = styled.p`
    font-size: ${props => props.theme.text14};
    line-height: ${props => props.theme.lh14};
    color: ${props => props.theme.black};
    text-transform: "uppercase";
    font-weight: ${props => props.fontWeight ? props.fontWeight : 500};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`

//HEADINGS
// Main text -  choose chategory 
export const Text_main = styled.h1`
    font-size: ${props => props.theme.text30};
    line-height: ${props => props.theme.lh30};
    color: ${props => props.theme.light_gray};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;
//Card heading
export const Card_heading = styled.h4`
    font-size: ${props => props.theme.text18};
    line-height: ${props => props.theme.lh18};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;
//Blogpost TITLE
export const Blog_title = styled.h3`
    font-size: ${props => props.theme.text48};
    line-height: ${props => props.theme.lh48};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;


// Paragraphs
export const Text14 = styled.p`
    font-size: ${props => props.theme.text14};
    line-height: ${props => props.theme.lh14};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;


export const Text16 = styled.p`
    font-size: ${props => props.theme.text16};
    line-height: ${props => props.theme.lh16};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Text18 = styled.p`
    font-size: ${props => props.theme.text18};
    line-height: ${props => props.theme.lh18};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Text24 = styled.p`
    font-size: ${props => props.theme.text24};
    line-height: ${props => props.theme.lh24};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Text30 = styled.p`
    font-size: ${props => props.theme.text30};
    line-height: ${props => props.theme.lh30};
    color: ${props => props.theme.light_gray};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Text48 = styled.p`
    font-size: ${props => props.theme.text48};
    line-height: ${props => props.theme.lh48};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

export const Text64 = styled.p`
    font-size: ${props => props.theme.text64};
    line-height: ${props => props.theme.lh64};
    color: ${props => props.theme.white};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
    font-family: ${props => props.fontFamily ? props.fontFamily : "inherit"};
`;

