import React from "react";
import styled from "styled-components";
import BG from "../../assets/images/header/BG.jpg"; 
import NavigateBar from "./navigateBar";

const Wrapper = styled.div`
    position : relative;
    width : 100vw;
    height : 320px;
    background-image : URL(${BG});
    background-position : center;
`

export default function(){

    return (
       <Wrapper>
           <NavigateBar />
       </Wrapper> 
    )
}