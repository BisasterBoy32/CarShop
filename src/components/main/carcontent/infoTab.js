import React from "react";
import styled from "styled-components";
import Element from "./infoTabElement";
import { FaCaretDown } from "react-icons/fa";
import tab1 from "../../../assets/images/tab/tab1.png";
import tab2 from "../../../assets/images/tab/tab2.png";
import tab3 from "../../../assets/images/tab/tab3.png";
import tab4 from "../../../assets/images/tab/tab4.png";
import tab5 from "../../../assets/images/tab/tab5.png";
import tab6 from "../../../assets/images/tab/tab6.png";
import tab7 from "../../../assets/images/tab/tab7.png";
import tab8 from "../../../assets/images/tab/tab8.png";
import tab9 from "../../../assets/images/tab/tab9.png";



const CarInfo = styled.div`
max-width : 400px; 
margin-left : 20px;
color : #fff;
`

const Head = styled.div`
padding : 2rem;
height : 135px;
background-color : #22243b;
`

const Title = styled.div`
font-size : 1.3rem;
border-left : 10px solid #f77d0a;
padding-left : 10px;
`

const SubTitle = styled.div`
font-size : .8rem;
margin-top : .5rem;
color : #868793;
`

const Content = styled.div`
background-color : #2b2e4a;
padding : 2rem;
    padding-bottom: 4rem;
`

const Footer = styled.div`
background-color : #22243b;
display : flex;
`

const FooterDiv = styled.div`
padding : 1rem;
display : flex;
width : 65%;
justify-content: center;
align-items: center;
position : relative;
`

const BeforePrice = styled.div`
position: absolute;
bottom: 4px;
left: -38px;
color: #fff;
font-weight: 400;
font-size: 1rem;
font-style: italic;
`

const Price = styled.div`
font-size : 1.5rem;
color : #f77d0a;
position : relative;
font-weight : 700;
font-family: 'Lato', sans-serif;
`
const UnderPrice = styled.div`
position: absolute;
bottom: -6px;
right: -28px;
font-size: 1rem;
font-weight: 700;
color: #f77d0a;
`

const FooterButton = styled.button`
padding: 1.7rem 1rem;
    background-color: #f77d0a;
    color: #fff;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    width: 35%;
`
const IconStyling = {
    color: "rgb(67, 69, 88)",
    position: "absolute",
    right: "-80px",
    fontSize: "1.1rem",
    top: "7px"
}

export default function ({ carInfo }) {

    return (
        <CarInfo>
            <Head>
                <Title>FOCUS INFOMATIONS</Title>
                <SubTitle> This white floral lace SubTitlelaysuit is the perfect combination of this season's</SubTitle>
            </Head>
            <Content>
                <Element img={tab1} title="Trasition" info={carInfo.trasition} />
                <Element img={tab2} title="Air Bags" info={carInfo.airBags} />
                <Element img={tab3} title="Technology" info={carInfo.tech} />
                <Element img={tab4} title="Economy" info={carInfo.economy} />
                <Element img={tab5} title="Fuel Type" info={carInfo.fuelType} />
                <Element img={tab6} title="Power" info={carInfo.power} />
                <Element img={tab7} title="Seats" info={carInfo.seats} />
                <Element img={tab8} title="Capty" info={carInfo.capty} />
                <Element img={tab9} title="Product Year" info={carInfo.producYear} />
            </Content>
            <Footer>
                <FooterDiv>
                    <Price>
                        <BeforePrice>from</BeforePrice>
                        $195
                        <UnderPrice> /day </UnderPrice>
                        <FaCaretDown style={IconStyling} />
                    </Price>
                </FooterDiv>
                <FooterButton> HIRE CAR</FooterButton>
            </Footer>

        </CarInfo>
    )
}
/*

*/