import React  from "react";
import styled from "styled-components";
import RelatedCars from "./relatedcar";
import Container from "../wrapper";
import BG from "../../assets/images/bg2.png";
import { relatedCars  } from "../../constants";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


const Wrapper = styled.div`
margin-top : 170px;
`

const Header = styled.div`
background-image : url(${BG});
padding : 1rem;
position : relative;
margin-bottom : 2rem;
`

const Text = styled.div`
margin-left : 2rem;
font-size : 1.4rem;
font-weight : 700;
`
const Changer = styled.div`
position : absolute;
top: 1rem;
right : 2rem;
`

const Content = styled.div`
display : flex;
justify-content : space-between;
`

export default function(){

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Text>May be you like</Text>
                    <Changer>
                        <FaChevronLeft style={{ cursor : "pointer" , marginRight : "3px"}}/>
                        <FaChevronRight style={{ cursor : "pointer"}}/>
                    </Changer>
                </Header>
                <Content>
                { relatedCars.map((carItem , i ) => {
                return ( <RelatedCars key={i} CarInfo={carItem} />)
                })}
                </Content>
            </Wrapper>
        </Container>
    )
}