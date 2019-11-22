import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display : flex;
`

const Img = styled.div`
    margin : 5px 10px;
`

const Content = styled.div`
    display : flex;
    flex-direction : column;
`

const P1 = styled.div`
    font-weight : 700;
    font-size : 0.8rem;
    color : #FFF;
`

const P2 = styled.div`
font-weight : 500;
font-size : 0.8rem;
color : #20675b;
`
export default function({ image , text1 , text2 , alter }){

    return (
        <Wrapper> 
            <Img>
                <img src={image} alt={alter}/>
            </Img>
            <Content>
                <P1>{text1}</P1>
                <P2>{text2}</P2>
            </Content>
        </Wrapper>
    )
}