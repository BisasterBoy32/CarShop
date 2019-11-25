import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/header/logo2.png";
import pic1 from "../../assets/images/social-media/pic6.png";
import pic2 from "../../assets/images/social-media/pic7.png";
import pic3 from "../../assets/images/social-media/pic8.png";
import pic4 from "../../assets/images/social-media/pic9.png";
import pic5 from "../../assets/images/social-media/pic10.png";

const Element = styled.div`
    padding-bottom : 50px;
    margin-bottom : 0.5rem;
    max-width : 270px;
`

const SocaileMedia = styled.div`
display: flex;
margin-top: 1.5rem;
padding-top: 1.5rem;
border-top: 1px solid #000;
width: 100%;
justify-content: space-around;
`

export default function(){

    const pics = [pic1 , pic2, pic3, pic4 ,pic5]
    return (
        <Element>
            <img src={logo} alt="logo" style={{ marginBottom : "1.5rem"}}/>
            <p style={{ marginBottom : ".5rem"}}>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis.
                <br /><br />
            At vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
            zzril delenit augue duis.
            </p>
            <SocaileMedia>
                {pics.map((pic ,i) => <img src={pic} alt="icon" key={i}/>)}      
            </SocaileMedia>
        </Element>
    )
}
