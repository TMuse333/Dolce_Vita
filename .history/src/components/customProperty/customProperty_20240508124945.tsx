import React from "react";
import ImageSlider from "../imageSlider/imageSlider";
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'
import custom1 from '../../media/customHome/custom-intreior.png'
import grey2 from '../../media/greyHome/grey-home2.png'
import grey3 from '../../media/greyHome/grey-home3.png'
import grey4 from '../../media/greyHome/grey-home4.png'
import grey5 from '../../media/greyHome/grey-home5.png'
import bed1 from '../../media/greyHome/grey-bed1.png'
import bed2 from '../../media/greyHome/grey-bed2.png'
import bath1 from '../../media/greyHome/grey-bathroom1.png'
import bath2 from '../../media/greyHome/grey-bathroom2.png'
import { greyHomeText,listText1 } from "../../data/data";
import { ImageSlider2 } from "../imageSlider2/imageSlider2";
import HomeSection from "../homeSection/homeSection";
import Accordion from "../accordion/accordion";
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import grey1 from '../../media/greyHome/grey-home1.png'
import TextFormat from "../textFormat/textFormat";
import Content from "../content/content";

const CustomProperty: React.FC = () => {

    const images = [
        grey2,grey3,
        grey4,grey5
    ]

    const images2 = [
        {
            url:grey2,
            alt:'grey2'
        },
        {
            url:grey3,
            alt:'grey3'
        },
        {
            url:grey4,
            alt:'grey4'
        },
        {
            url:grey5,
            alt:'grey5'
        },
        {
            url:grey5,
            alt:'grey6'
        },
        {
            url:grey5,
            alt:'grey7'
        },
    ]

    const images3 = [
        {
            image:bed1,
            alt:'bed 1'
        }
    ]

    return (
        <section className="absolute top-0 left-0 flex justify-center flex-col items-center w-screen">
            {/* <h2>We make awesome custom homes </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde sint alias porro ea natus error voluptatum, laudantium autem eius quod laboriosam eum totam rem? Consequatur cum nisi magni iste.</p> */}

            <TextParallaxContentExample
            image={grey1}
            heading='Our grey Home'
            subheading="It is very nice"
            destination="link"
            title='title'
            description={[
                'description'
            ]}
            hasDestination={true}/>


            <HomeSection
            {...greyHomeText}
            images={images2}


            />

           <Content
           hasAnimation={true}
           image={grey1}
           customText={<TextFormat
        isAnimated={true}
    reverse={false}
    />}

    />


            <Accordion
            text={listText1}
            hasIntro={false}
            intro='Here is the intro'
            description='Here are some other features'
            />
        
        </section>
    )
}

export default CustomProperty