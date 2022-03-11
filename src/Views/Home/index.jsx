import React from "react";
import { HomeBody } from "../../Components/Body";
import { GeneralHeader } from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import { HomeMain } from "../../Components/Main";
import { AppsSection, HomeSection, NoCodeSection } from "../../Components/Sections";
import { PATHS } from "../../Constants";
import { ButtonLabel, Description, Title } from "../../Components/Texts";
import { GetStarted } from "../../Components/Buttons/Buttons.styles";



function Home() {

    const navigate = useNavigate()

    function goTo(event, path) {
        event.preventDefault()
        navigate(path)
    }

    return (
        <HomeBody>
           <GeneralHeader></GeneralHeader>
           <HomeMain>
                <HomeSection id="section1">
                    <Title GridArea="title">Welcome to MLGraph!</Title>
                    <Description GridArea="description">MLGraph is a NoCode platform designed for building deep learning architectures and machine learning systems.</Description>
                    <GetStarted GridArea="button" onClick={event=>goTo(event, PATHS.workspace)}>
                        <ButtonLabel Color="#fff">Get Started</ButtonLabel>
                    </GetStarted>
                    <h1 GridArea="animation" style={{textAlign:"center"}}>Some Animation in the future</h1>    
                </HomeSection>
                <AppsSection id="section2"><h1>Apps Section</h1></AppsSection>
                <NoCodeSection id="section3"><h1>NoCode Section</h1></NoCodeSection>
           </HomeMain>
        </HomeBody>
    )
}

export default Home



// <HomeCard>
//                <Title GridArea="home_card_title">Welcome to DLGraph!</Title>
//                <Description GridArea="home_card_text">
//                    DLGraph is a platform designed to find and build Deep Learning Architectures 
//                    in a friendly way. So let’s get started!
//                 </Description>
//                 <GetStarted GridArea="home_card_btn_1"
//                     onClick={
//                         event => goTo(event, PATHS.workspace)
//                     }
//                 >
//                     <ButtonLabel Color="#000000">
//                         Get Started
//                     </ButtonLabel>
//                 </GetStarted>
//                 <LearnMore GridArea="home_card_btn_2"
//                     onClick={
//                         event => goTo(event, PATHS.about)
//                     }
//                 >
//                     <ButtonLabel Color="#FFFFFF">
//                         Learn More
//                     </ButtonLabel>
//                 </LearnMore>
//             </HomeCard>        