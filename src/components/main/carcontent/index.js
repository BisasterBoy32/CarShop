import React from "react";
import styled from "styled-components";
import Container from "../../wrapper";
import { carInfo } from "../../../constants";
import Car from "./car";
import CarTab from "./infoTab";

const Wrapper = styled.div`
width : 100%;
display : flex;
margin-top : 90px;
`
export default function(){

    return (
        <Container>
            <Wrapper>
                <Car carInfo={carInfo}/>
                <CarTab carInfo={carInfo}/>
            </Wrapper>
        </Container>
    )
}