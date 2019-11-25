import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import sold from "../../assets/images/sold.jpg";
import Price from "../main/carcontent/price";


const Wrapper = styled.div`
max-width : 370px;
max-height : 153px;
display : flex;
align-items : center;
justify-content : center;
background-color : #fff;
border-top : 2px solid ${props => props.bg};
position : relative;
padding : 1rem;
box-shadow : 3px 3px 3px #ccc;
color : #ccc;
cursor : pointer;
`

const Image = styled.div`
max-width : 150px;
margin-right: 1rem;
`

const Sold = styled.div`
position : absolute;
top : 0px;
left : 10px;
`
const Reviews = styled.div`
display : flex;
flex-direction : column;
`

const Name = styled.div`
font-size : 1rem;
font-weight : 700;
border-top : 2px solid #ccc;
color : #5f6176;
margin-top : 0.5rem;
padding-top : 0.2rem;
`

const Revs = styled.div`
margin-top : .5rem;
`

const BeforePrice = styled.div`
display : flex;
justify-content : center;
`

export default function({ CarInfo }){

    return (
        <Wrapper bg={ CarInfo.sold ? "#ed0a3b" : "#fff" }>
        { CarInfo.sold ? <Sold> <img src={sold} alt="sold" /></Sold> : undefined }
        <Image> 
            <img src={CarInfo.image} alt="car" style={{ width : "100%"}}/>
        </Image>
        <Reviews>
            <BeforePrice>
                <Price price={CarInfo.prix} color="#b5b3b3" />
            </BeforePrice>
            <Revs>
            {
                [...Array(CarInfo.stars)].map((e , i) => <FaStar style={{ color : "#57d9a9"}} key={i}/>)
            }
            {
                [...Array(5 - CarInfo.stars)].map((e , i) => <FaStar key={i} />)
            }
            ( {CarInfo.reviews}reviews)
            </Revs>
        <Name> {CarInfo.name} </Name>
        </Reviews>
        </Wrapper>
    )
}