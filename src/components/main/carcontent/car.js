import React , { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import pic1 from "../../../assets/images/social-media/pic6.png";
import pic2 from "../../../assets/images/social-media/pic7.png";
import pic3 from "../../../assets/images/social-media/pic8.png";
import pic4 from "../../../assets/images/social-media/pic9.png";
import pic5 from "../../../assets/images/social-media/pic10.png";


const Car = styled.div`
max-width : 780px; 
`

const Head = styled.div`
padding : 1.5rem;
box-shadow : 3px 3px 3px #cccccc;
background-color : #fff;
`

const Title = styled.div`
font-size : 2rem;
`
const Content = styled.div`
margin-top : 1rem;
font-size : 2rem;
box-shadow : 3px 3px 3px #cccccc;
background-color : #fff;
`

const MainCar = styled.div`
width : 80%;
margin : auto;
height : 400px;
display : flex;
align-items : center;
position : relative;
`

const Footer = styled.div`
margin-top : 1rem;
display : flex;
overflow-x: scroll;
box-shadow: 3px 3px 3px #cccccc;
background-color : #fff;
`

const FooterImage = styled.div`
display : flex;
width : 150px;
height : 110px;
cursor : pointer;
background-color : #cccccc;
margin : 5px;
border : 1px solid ${props => props.selected };
&:hover {
    border : 1px solid #ea6228;
}
`

const SocialMedia = styled.div`
position : absolute ;
display : flex;
flex-direction : column;
top : 3rem;
right : -50px;
cursor : pointer;
`

const Icon = styled.div`
width : 45px;
height : 45px;
margin-bottom : 5px;
background-image : url(${props => props.image});
background-color: rgb(255,255 ,255 ,0.8);
background-repeat : no-repeat;
background-position : center;
background-blend-mode : lighten;
&:hover {
    background-blend-mode : normal;
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
                    <SocialMedia>
                        <a href="#"><Icon image={pic1} /></a>
                        <a href="#"><Icon image={pic2} /></a>
                        <a href="#"><Icon image={pic3} /></a>
                        <a href="#"><Icon image={pic4} /></a>
                        <a href="#"><Icon image={pic5} /></a>
                    </SocialMedia>
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