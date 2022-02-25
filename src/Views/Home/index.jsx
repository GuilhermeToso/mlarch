import React from "react";
import { HomeBody } from "../../Components/Body";
import { GetStarted, LearnMore } from "../../Components/Buttons";
import { HomeCard } from "../../Components/Cards";
import { Title, Description, ButtonLabel } from "../../Components/Texts";

function Home() {
    return (
        <HomeBody>
           <HomeCard>
               <Title GridArea="home_card_title">Welcome to MLArch!</Title>
               <Description GridArea="home_card_text">
                   MLArch is a platform designed to find and build Deep Learning Architectures 
                   in a friendly way. So let’s get started!
                </Description>
                <GetStarted GridArea="home_card_btn_1">
                    <ButtonLabel Color="#000000">
                        Get Started
                    </ButtonLabel>
                </GetStarted>
                <LearnMore GridArea="home_card_btn_2">
                    <ButtonLabel Color="#FFFFFF">
                        Learn More
                    </ButtonLabel>
                </LearnMore>
            </HomeCard>        
        </HomeBody>
    )
}

export default Home