import React , { useState } from "react";
import styled from "styled-components";
import Container from "./wrapper";
import check from "../assets/images/check.png";

const Wrapper = styled.div`
margin-top : 2rem;
`
const NavBar = styled.div`
display : flex;
`

const NavBarElement = styled.div`
display : flex;
justify-content : center;
width : 100%;
padding : 1rem 0rem;
align-items : center;
background-color : ${props => props.color ?  props.color : "#2b2e4a"};
color : ${props => props.color ? "#fff" : "#4b4d65"};
cursor : pointer;
`

const Content = styled.div`
    padding : 2.5rem 2rem;
    color : #87888f;
`
const List = styled.div`
display : flex;
padding : 2rem;
justify-content : space-between;
`
const ListInside = styled.ul`
list-style-type : none;
`

const L = styled.li`
display : flex;
padding : 8px;
margin-right : 10px;
font-style : italic;
`

export default function(){

    const [selectedOne , setSelectedOne] = useState("overview")
    return (
        <Wrapper>
        <Container>
            <NavBar>
                <NavBarElement
                color={selectedOne === "overview" ? "#22243b" : false}
                onClick={() => setSelectedOne("overview")}
                >
                OVERVIEW 
                </NavBarElement>
                <NavBarElement
                    color={selectedOne === "SERVICES OFFERED" ? "#22243b" : false}
                    onClick={() => setSelectedOne("SERVICES OFFERED")}
                >
                    SERVICES OFFERED
                </NavBarElement>
                <NavBarElement
                    color={selectedOne === "LOCATION" ? "#22243b" : false}
                    onClick={() => setSelectedOne("LOCATION")}
                >
                    LOCATION
                </NavBarElement>
                <NavBarElement
                    color={selectedOne === "REVIEWS" ? "#22243b" : false}
                    onClick={() => setSelectedOne("REVIEWS")}
                >
                    REVIEWS
                </NavBarElement>
            </NavBar>
            <Content>
                    <p>
                    Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus. The sharp, high-tech Mercedes automatic with its superbly plush cabin is the star in our 
                    Luxury Automatic car hire class.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
                    </p>
                    <br/>
                    <p>
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, 
                    egestas eget quam. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.
                    </p>
                    <List>
                        <ListInside>
                            <L>
                                <img src={check} alt="img" style={{ marginRight : "15px"}}/>
                                Tellus ac cursus commodo, tortor mauris condimentum nibh
                            </L>
                            <L>
                                <img src={check} alt="img" style={{ marginRight: "15px" }}/>
                                Donec id elit non mi porta gravida at eget metus. Cras justo od
                            </L>
                            <L>
                                <img src={check} alt="img" style={{ marginRight: "15px" }}/>
                                Mirum est notare quam littera 
                            </L>
                            <L>
                                <img src={check} alt="img" style={{ marginRight: "15px" }}/>
                                Claritas est etiam processus dynamicus
                            </L>
                        </ListInside>
                        <ListInside>
                            <L>
                                <img src={check} alt="img" style={{ marginRight: "15px" }}/>
                                Duis autem vel eum iriure
                            </L>
                            <L>
                                <img src={check} alt="img" style={{ marginRight: "15px" }}/>
                                Dolor in hendrerit in thermal
                            </L>
                            <L>
                                <img src={check} alt="img" style={{ marginRight: "15px" }}/>
                                Etiam porta sem malesuada magna mollis euismod.
                            </L>
                            <L>
                                <img src={check} alt="img" style={{ marginRight: "15px" }}/>
                                Claritas est etiam processus dynamicus
                            </L>
                        </ListInside>
                    </List>
            </Content>
        </Container>
        </Wrapper>
    )
}