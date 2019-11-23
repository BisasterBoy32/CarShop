import React , { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";


const Car = styled.div`
max-width : 780px; 
`

const Head = styled.div`
padding : 1.5rem;
box-shadow : 3px 3px 3px #cccccc;
`

const Title = styled.div`
font-size : 2rem;
`
const Content = styled.div`
margin-top : 1rem;
font-size : 2rem;
box-shadow : 3px 3px 3px #cccccc;
`

const MainCar = styled.div`
width : 570px;
height : 400px;
display : flex;
align-items : center;
`

const Footer = styled.div`
margin-top : 1rem;
display : flex;
overflow-x: scroll;
box-shadow: 3px 3px 3px #cccccc;
`

const FooterImage = styled.div`
display : flex;
width : 150px;
height : 110px;
cursor : pointer;
background-color : #cccccc;
margin : 5px;
border : 1px solid ${props => props.selected }
&:hover {
    border : 1px solid #ea6228;
}
`

export default function({carInfo}){

    const [mainImage , setMainImage] = useState(0);

    return (
        <Car>
            <Head>
                <Title> {carInfo.name} </Title>
                {[...Array(carInfo.greenStars)].map((e , i )=> {
                    return <FaStar style={{ color: "#59daaa" }} key={i} />
                })}
                {[...Array(5 - carInfo.greenStars)].map((e, i) => {
                    return <FaStar key={i}/>
                })}
                ({carInfo.reviews} reviews)
            </Head>
            <Content>
                <MainCar>
                    <img 
                    src={carInfo.footerImg[mainImage]} 
                    alt="car-image" 
                    style={{ width : "100%"}}/>
                </MainCar>
    
            </Content>
            <Footer>
                {carInfo.footerImg.map((img, index) => {
                    return (
                        <FooterImage 
                        selected={index === mainImage ? "#ea6228" : "#fff"}
                        onClick={() => { setMainImage(index)}}>
                            <img 
                            src={img} 
                            alt="car" key={index}
                            style={{ width: "100%", height : "100%;"}} />
                        </FooterImage>
                    )
                })}
            </Footer>

        </Car>
    )
}