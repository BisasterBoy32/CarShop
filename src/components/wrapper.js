import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 98%;
    max-width : 1200px;
    margin : auto;
    display : ${props => props.flexy ? "flex" : "block"};
    align-items : ${props => props.vcenter ? "center"  : undefined};
    justify-content : ${props => props.hcenter ? "center"  : undefined};
    justify-content : ${props => props.saround ? "space-around"  : undefined};
`

export default function({children , flexy ,hcenter ,vcenter ,saround}){
    return (
        <>
        <Wrapper 
        flexy={ flexy ? true : false}
        hcenter={ hcenter ? true : false}
        vcenter={ vcenter ? true : false}
        saround= {saround ? true : false}
        >
            {children}
        </Wrapper>
        </>
    )
}