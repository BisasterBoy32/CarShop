import React from "react";
import styled from "styled-components";
import FirstElement from "./firstElement";
import SecondElement from "./secondElement";
import ThirdElement from "./thirdElement";


const Wrapper = styled.div`
background-color : #1e2036;
padding : 220px 0px 20px 0px;
margin-top : 220px;
`
const Content = styled.div`
    display : flex;
    padding-bottom : 50px;
    border-bottom : 1px solid #000;
    margin-bottom : 0.5rem;
    flex-wrap : wrap;
    color : #565868;
    justify-content : space-around;
`

export default function(){

    return (
        <Wrapper>
            <Content>
                <FirstElement />
                <SecondElement />
                <ThirdElement />
            </Content>
        </Wrapper>
    )
}