import React from "react";
import styled from "styled-components";
import Container from "../wrapper";
import { headerInfo } from "../../constants";
import logo2 from "../../assets/images/header/logo2.jpg";
import InfoComponent from "./info";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Wrapper = styled.div`
background-color : #22243b;
`

const Icon = styled.div`
    margin-left : 3rem;
    position : relative;
    width : max-content;
    height : max-content;
`

const Count = styled.div`
position : absolute;
bottom : -3px;
right : -3px;
padding : 2px;
color : #fff;
background-color : #f77d0a;
border-radius : 50%;
font-size : 0.5rem;
`

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export default function(){

    return (
        <Wrapper>
            <Container flexy saround vcenter>
                <img src={logo2} alt="logo2" />
                { headerInfo.map( item => (
                    <InfoComponent 
                        key = {item.id}
                        image={item.image}
                        text1={item.text1}
                        text2={item.text2}
                        alter={item.alt}
                    />
                ))}
                <Icons>
                    <Icon>
                        <FaShoppingBag style={{ fontSize : "1.3rem" , color : "#fff"}}/>
                        <Count>03</Count>
                    </Icon>
                    <FaBars style={{ fontSize : "1.3rem" , color : "#fff", marginLeft : "10px"}} />
                </Icons>
            </Container> 
       </Wrapper>
    )
}