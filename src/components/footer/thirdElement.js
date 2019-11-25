import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/footer/arrow.png";
import { ItemComp } from "./secondElement";


const Element = styled.div`
    padding-bottom : 50px;
    margin-bottom : 0.5rem;
    max-width : 170px;
`

const Title = styled.div`
    font-size : 1.5rem;
    font-weight : 700;
    color : #fff;
    margin-bottom : 3rem;
`

const List = styled.ul`
display : flex;
flex-direction : column;
height : 160px;
justify-content: space-around;
margin-bottom : 1rem;
`

export default function(){

    const data = [
        "FAQs" , "Content" , "About" ,
        "Membership" , "Exchange accepted" ,
        "Helop" , "Other"
    ]

    return (
        <Element>
            <Title>UFULLINK</Title>
            <List>
                {data.map((text , i) => <ItemComp image={arrow} text={text}/>)}
            </List>
        </Element>
    )
}

