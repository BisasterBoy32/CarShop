import React from "react";
import styled from "styled-components";
import menu from "../../assets/images/header/menu.jpg";
import { FaArrowDown } from "react-icons/fa";

const Wrapper = styled.div`
    position : absolute;
    top : 0px;
    right : 0px;
    left : 0px;
    display : flex;
    flex-direction: column;
    justify-content : center;
`
const Bar = styled.div`
    height : 3px;
    width : 100%;
    background-color : #f77d0a;
`

const MenuWrapper = styled.div`
background-image : URL(${menu});
background-position : center;
max-width : 950px;
width : 100%;
margin : auto;
height : 51px;
`

const Menu = styled.ul`
list-style-type : none;
display : flex;
justify-content : space-between;
align-items : center;
padding : 0.4rem;
width : 80%;
margin : auto;
height : 100%;
`
const MenuElement = styled.li`
cursor : pointer;
font-weight : 700;
&:hover{
    color : #fff;
}
`

export default function(){
    return (
        <Wrapper>
            <Bar />
            <MenuWrapper>
                <Menu>
                    <MenuElement>HOME <FaArrowDown /></MenuElement>
                    <MenuElement>ABOUT</MenuElement>
                    <MenuElement>SERVICE</MenuElement>
                    <MenuElement>CONTACT</MenuElement>
                    <MenuElement>BLOGS</MenuElement>
                    <MenuElement>SHORTCODE</MenuElement>
                    <MenuElement>PAGES</MenuElement>
                </Menu>
            </MenuWrapper>
        </Wrapper>
    )
}