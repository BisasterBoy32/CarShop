import React  from "react";
import styled from "styled-components";
import Container from "../wrapper";
import BG from "../../assets/images/bg2.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Wrapper = styled.div`
margin-top : 170px;
`

const Header = styled.div`
background-image : url(${BG});
padding : 1rem;
margin-left : 2rem;
position : relative;
`
const Changer = styled.div`
position : absolute;
top: 1rem;
right : 2rem;
`

export default function(){

    return (
        <Container>
            <Wrapper>
                <Header>
                    May be you like
                    <Changer>
                        <FaChevronLeft style={{ cursor : "pointer" , marginRight : "3px"}}/>
                        <FaChevronRight style={{ cursor : "pointer"}}/>
                    </Changer>
                </Header>
            </Wrapper>
        </Container>
    )
}