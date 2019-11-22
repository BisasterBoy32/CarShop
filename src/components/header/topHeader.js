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
                        <FaSearch style={socialMedia}/>
                    </LI>
                    <LI >
                        <FaFacebook style={socialMedia}/>
                    </LI>
                    <LI>
                        <FaTwitter  style={socialMedia}/>
                    </LI>
                    <LI>
                        <FaGooglePlus style={socialMedia}/>
                    </LI>
                    <LI>
                        <FaYoutube style={socialMedia}/>    
                    </LI>
                    <LI>
                        <FaLinkedin style={socialMedia}/>
                    </LI>
                    <LI>
                        <FaWifi style={socialMedia}/>
                    </LI>
                </SideElements>
            </Container>
        </Wrapper>
    )
}