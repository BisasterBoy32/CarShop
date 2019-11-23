import React from "react";
import styled from "styled-components";
import Container from "../wrapper";
import logo1 from "../../assets/images/header/logo1.jpg";
import { 
FaSearch , FaFacebook , FaTwitter ,
FaGooglePlus , FaYoutube , FaLinkedin ,
FaWifi 
} from "react-icons/fa";

const Wrapper = styled.div`
display : flex;
height : 50px;
background-color : #1c1e32;
`

const SideElements = styled.ul`
list-style-type : none;
display : flex;
margin-left : auto;
width : max-content;
`

const LI = styled.li`
    padding : 0px 10px;
    color : #FFF;
    cursor : pointer;
    &:hover{
        color : #f77d0a;
    }
`

const socialMedia = {
    color : "inherite",
    fontSize : "0.6rem",
}

export default function(){
    return (
        <Wrapper>
            <Container flexy>
                <img src={logo1} alt="logo" />
                <SideElements>
                    <LI style={{ borderRight : "1px solid #fff"}}>
                        <a href="#"><FaSearch style={socialMedia} /></a>
                    </LI>
                    <LI >
                        <a href="#"><FaFacebook style={socialMedia}/></a>
                    </LI>
                    <LI>
                        <a href="#"><FaTwitter  style={socialMedia}/></a>
                    </LI>
                    <LI>
                        <a href="#"><FaGooglePlus style={socialMedia}/></a>
                    </LI>
                    <LI>
                        <a href="#"><FaYoutube style={socialMedia}/>  </a>  
                    </LI>
                    <LI>
                        <a href="#"><FaLinkedin style={socialMedia}/></a>
                    </LI>
                    <LI>
                        <a href="#"><FaWifi style={socialMedia}/></a>
                    </LI>
                </SideElements>
            </Container>
        </Wrapper>
    )
}