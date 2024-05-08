import React from "react";



import outdoor1 from '../../media/white/outdoor1.png'
import outdoor2 from '../../media/white/outdoor2.png'
import outdoor3 from '../../media/white/outdoor3.png'


import { greyHomeText,listText1,greyHomeText2 } from "../../data/data";
import HomeSection from "../homeSection/homeSection";
import Accordion from "../accordion/accordion";
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import grey1 from '../../media/greyHome/grey-home1.png'
import TextFormat from "../textFormat/textFormat";
import Content from "../content/content";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const GreyHome: React.FC = () => {

    const images = [
     
    ]

    const images2 = [
        {
            url:outdoor1,
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
            url:bed1,
            alt:'bed 1'
        },
        {
            url:bed2,
            alt:'bed 2'
        },
        {
            url:bath1,
            alt:'bath 1'
        },
        {
            url:bath2,
            alt:'bath 1'
        }
    ]

    const workLinks = {
        title: 'Our Work',
        links: [
          
            {
                destination: '/commercial-properties',
                name: 'Commercial Properties'
            },
            {
                destination: '/retail-construction',
                name: 'Retail construction'
            }
        ]
    };
    
    const contactLinks = {
        title: 'Site Map',

        links: [
            {
                destination:'/',
                name:'Homepage'
            },
            {
                destination: 'contact',
                name: 'Contact us'
            },

        ]
    };

        const links = [
            workLinks,
            contactLinks
        ]

        const navLinks = [
            {
                destination:'/',
                name:'Home'
            },
            ...workLinks.links,
           {
            destination:'contact',
            name:'Contact'
           }
        ]

    return (
        <>
        <Navbar
        links={navLinks}
        />
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
            hasDestination={false}/>


            <HomeSection
            {...greyHomeText}
            images={images2}


            />

            <HomeSection
            {...greyHomeText2}
            images={images3}
            />

           <Content
           hasAnimation={true}
           image={grey1}
           customText={ <Accordion
            text={listText1}
            hasIntro={true}
            intro='lorem ipsum lorem'
            description='Here are some other features'
            />}

    />


           
<Footer
        links={links}
        />
        </section>

       
        </>
    )
}

export default GreyHome