import React from "react";
import styled from "styled-components";
import location from "../../assets/images/footer/location.png";
import phone from "../../assets/images/footer/phone.png";
import email from "../../assets/images/footer/email.png";
import location2 from "../../assets/images/footer/location.jpg";

const Element = styled.div`
    padding-bottom : 50px;
    margin-bottom : 0.5rem;
    max-width : 270px;
`

const Title = styled.div`
    font-size : 1.5rem;
    font-weight : 700;
    color : #fff;
    margin-bottom : 3rem;
`

const Item = styled.div`
    display : flex;
`

const List = styled.ul`
display : flex;
flex-direction : column;
height : 160px;
justify-content: space-around;
margin-bottom : 1rem;
`
const ImageStyling = {
    marginRight :  "10px" ,
    maxWidth: "20px",
    maxHeight: "19px",
}

export const ItemComp = ({ image , text }) => {
    return (
        <Item>
            <img src={image} alt="icon" style={ImageStyling}/>
            {text}
        </Item>
    )
}

export default function(){

    const listContent = [
        { img : location , text : "3588 N  Stelling road, Brooklyn, NYC, United State."},
        { img : phone , text : "1800 - 112 - 8888/ EXT: 001"},
        { img : email , text : "SuperHire@support.com"}
    ]

    return (
        <Element>
            <Title>CONTACT INFO </Title>
            <List>
                {listContent.map((item , i ) => (
                    <ItemComp 
                    image = {item.img} 
                    text = {item.text}
                    key={i}
                    />)
                )}
            </List>
            <img alt="location" src={location2}/>
        </Element>
    )
}
