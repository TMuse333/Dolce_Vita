import React from "react"
import Content from "../content/content"
import { TextParallaxContentExample } from "../parallaxText/parallaxText"
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'
import { text1 } from "../../data/data"
import ImageSlider from "../imageSlider/imageSlider"
import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"

const Homepage: React.FC = () => {
    const workLinks = {
        title: 'Our Work',
        links: [
            {
                destination: 'custom-homes',
                name: 'Custom Homes'
            },
            {
                destination: 'commercial-properties',
                name: 'Commercial Properties'
            },
            {
                destination: 'retail-construction',
                name: 'Retail construction'
            }
        ]
    };
    
    const contactLinks = {
        title: 'Contact',
        links: [
            {
                destination: 'contact',
                name: 'Email Us'
            }
        ]
    };

        const links = [
            workLinks,
            contactLinks
        ]

        const navLinks = [
            ...workLinks.links,
           {
            destiniation
           }
        ]

        

    return (
        <>
           <Navbar
        links={navLinks}
        />
      <section className="absolute top-20 left-0 w-screen">



            {/* <TextParallaxContentExample
            image={home1}
            heading='Dolce Vita Construction and Project Management'
            subheading="We are"
            title={text1.title}
            description={text1.description}
            hasDestination={true}
            destination='custom-homes'
            /> */}

            <Content
            image={home1}
            mainTitle={text1.title}
            customText={false}
            reverse={false}
            description={text1.description}
            floatingImage={false}
            hasAnimation={true}
            buttonLink={text1.buttonLink}
            buttonText={text1.buttonText}
            />

            <Content
            image={home2}
            mainTitle={text1.title}
            customText={false}
            reverse={true}
            description={text1.description}
            floatingImage={false}
            hasAnimation={true}
            buttonLink={text1.buttonLink}
            buttonText={text1.buttonText}
            />

            <Footer
            links={links}
            />

            {/* <ImageSlider
            images={images}/> */}
            </section>
            </>
    )
    
}


export default Homepage