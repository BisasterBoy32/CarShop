import React from "react";
import styled from "styled-components";

const Element = styled.div`
display : flex;
justify-content : space-between;
padding-top : 1rem;
`

const ElementOne = styled.div`
display : flex;
color : #3e415a;
`
const ElementTwo = styled.p`
font-weight : 700;
`

const SubElementOne = styled.p`
margin-left : 10px;
`

export default function({ img , title , info}){

    return(
        <Element>
            <ElementOne>
                <img src={img} alt="icon" />
                <SubElementOne>{title}</SubElementOne>
            </ElementOne>
            <ElementTwo>{info}</ElementTwo>
        </Element>
    )
}