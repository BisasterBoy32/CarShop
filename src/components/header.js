import React from "react";
import styled from "styled-components";
import TopHeader from "./header/topHeader";
import Infobar from "./header/InfoBar";

const Wrapper = styled.div`
width : 100vw;
`
export default function(){
    return (
        <>
            <Wrapper>
                <TopHeader />  
                <Infobar />          
            </Wrapper>
        </>
    )
}