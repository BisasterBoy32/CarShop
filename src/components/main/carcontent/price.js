import React from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

const IconStyling = {
    color: "rgb(67, 69, 88)",
    position: "absolute",
    right: "-80px",
    fontSize: "1.1rem",
    top: "7px"
}

const BeforePrice = styled.div`
position: absolute;
bottom: 4px;
left: -38px;
font-weight: 400;
font-size: 1rem;
font-style: italic;
color: ${props => props.color ? props.color : "#fff"};
`

const Price = styled.div`
font-size : 1.5rem;
color : #f77d0a;
position : relative;
font-weight : 700;
font-family: 'Lato', sans-serif;
width : max-content;
`
const UnderPrice = styled.div`
position: absolute;
bottom: -6px;
right: -28px;
font-size: 1rem;
font-weight: 700;
color: #f77d0a;
`

export default function({ price , scroll ,color}){
    return (
    <Price>
        <BeforePrice color={ color || "#fff"}>from</BeforePrice>
        {price}
        <UnderPrice> /day </UnderPrice>
        {scroll && <FaCaretDown style={IconStyling} />}
    </Price>
    )
}